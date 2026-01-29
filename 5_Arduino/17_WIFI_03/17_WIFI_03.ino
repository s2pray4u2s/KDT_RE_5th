#include <SoftwareSerial.h>

SoftwareSerial myESP(2, 3); // D2 = RX (ESP TX), D3 = TX (ESP RX)

const char *ssid = "spreatics_gusan_cctv";
const char *password = "spreatics*";
const char *server = "192.168.201.127";
const int port = 5000;

bool sendCommand(String cmd, String expect, int timeout) {
  myESP.print(cmd);
  myESP.print("\r\n");

  unsigned long t = millis();
  String buf;

  while (millis() - t < timeout) {
    while (myESP.available()) {
      char c = myESP.read();
      buf += c;
      Serial.write(c);

      if (buf.indexOf(expect) != -1) {
        return true;
      }
    }
  }

  Serial.println("\n[응답 타임아웃]");
  return false;
}

void sendDataToServer(int temp, int hum) {

  // 🔧 ESP 버퍼 초기화 (중요)
  while (myESP.available()) myESP.read();

  String url = "/data?temperature=" + String(temp) + "&humidity=" + String(hum);

  // 🔧 CONNECT → OK 로 변경
  if (!sendCommand(
        "AT+CIPSTART=\"TCP\",\"" + String(server) + "\"," + port,
        "OK",
        5000)) {
    Serial.println("[TCP 연결 실패]");
    return;
  }

  String req =
    "GET " + url + " HTTP/1.1\r\n"
    "Host: " + String(server) + ":" + String(port) + "\r\n"
    "Connection: close\r\n\r\n";

  // 🔧 실패 로그 추가
  if (!sendCommand("AT+CIPSEND=" + String(req.length()), ">", 5000)) {
    Serial.println("[CIPSEND 실패]");
    return;
  }

  myESP.print(req);

  if (!sendCommand("", "SEND OK", 5000)) {
    Serial.println("[SEND OK 못 받음]");
    return;
  }

  sendCommand("AT+CIPCLOSE", "OK", 2000);
  Serial.println("\n[전송 완료!]");
}

void setup() {
  Serial.begin(9600);
  myESP.begin(9600);

  Serial.println("ESP 실행 시작...");

  sendCommand("AT", "OK", 2000);
  sendCommand("AT+CWMODE=1", "OK", 2000);
  sendCommand(String("AT+CWJAP=\"") + ssid + "\",\"" + password + "\"", "GOT IP", 15000);
  sendCommand("AT+CIPMUX=0", "OK", 2000);
}

void loop() {
  sendDataToServer(25, 60);
  delay(5000);
}
