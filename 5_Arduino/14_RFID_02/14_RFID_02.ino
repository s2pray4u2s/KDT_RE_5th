#include <MFRC522.h>
#include <SPI.h>

#define RST_PIN 9
#define SS_PIN 10

MFRC522 myMFRC(SS_PIN, RST_PIN);

int LED_blue = 3;
int LED_red = 4;
int PIEZO = 6;

void setup() {
  Serial.begin(9600);
  SPI.begin();
  myMFRC.PCD_Init(); // 초기화 누락 방지

  pinMode(LED_blue, OUTPUT);
  pinMode(LED_red, OUTPUT);
  pinMode(PIEZO, OUTPUT);

  Serial.println("RFID Reader Ready...");
}

void loop() {
  // 새 카드가 접촉되지 않았거나, ID를 읽지 못했을 때 리턴
  if (!myMFRC.PICC_IsNewCardPresent() || !myMFRC.PICC_ReadCardSerial()) {
    delay(500);
    return;
  }

  // UID 확인용 (시리얼 모니터에서 실제 UID를 확인해보세요)
  Serial.print("Card UID:");
  for (byte i = 0; i < myMFRC.uid.size; i++) {
    Serial.print(" ");
    Serial.print(myMFRC.uid.uidByte[i]); // 10진수로 출력
  }
  Serial.println();
  
  // 특정 UID에 해당하는 흰 카드 (189, 50, 25, 2)
  if (myMFRC.uid.uidByte[0] == 189 && myMFRC.uid.uidByte[1] == 50
      && myMFRC.uid.uidByte[2] == 25 && myMFRC.uid.uidByte[3] == 2) {
    
    Serial.println("Access Granted: Hello, LED_blue");
    
    digitalWrite(LED_blue, HIGH); // 파란 LED 켬
    digitalWrite(PIEZO, HIGH);    // 부저 시작
    delay(300);                   // 0.3초 대기
    digitalWrite(PIEZO, LOW);     // 부저 끔
    delay(700);                   // LED는 총 1초 동안 켜져 있도록 추가 대기
    digitalWrite(LED_blue, LOW);  // 파란 LED 끔
    
  } else { 
    // 승인되지 않은 태그일 경우
    Serial.println("Access Denied: Error!!");
    
    digitalWrite(LED_red, HIGH);  // 빨간 LED 켬
    
    digitalWrite(PIEZO, HIGH); delay(200);
    digitalWrite(PIEZO, LOW);  delay(100);
    digitalWrite(PIEZO, HIGH); delay(400);
    digitalWrite(PIEZO, LOW);
    
    digitalWrite(LED_red, LOW);   // 빨간 LED 끔
  }

  // 다음 인식을 위한 종료 처리
  myMFRC.PICC_HaltA();
}