
void setup() {
  pinMode(3, OUTPUT);     // 디지털 3번 핀을 출력으로 사용한다고 정의
}

void loop() {
  digitalWrite(3, HIGH);  // 3번 핀을 high (5볼트)로 출력하라! > LED 켜짐
  delay(1000);            // LED가 켜진 상태로 1초 중지         
  digitalWrite(3, LOW);   // 3번 핀을 low (0볼트)로 출력하라! > LED 꺼짐
  delay(1000);            // LED가 켜진 상태로 1초 중지           
}
