const int PIEZO_PIN = 8; // 읽기 전용 상수 선언 >> 이후 값 수정 불가
const int melody[] ={
  /* 도, 레, 미, 파, 솔, 라, 시, 도*/
  262, 294, 330, 349, 392, 440, 494, 523
};

void setup() {
  for (int i = 0; i < 8; i++) {
    tone(PIEZO_PIN, melody[i], 500); delay(500);
  }
}

void loop() {
}