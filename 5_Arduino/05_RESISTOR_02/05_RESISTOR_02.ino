void setup() {
  Serial.begin(9600);
  pinMode(10, OUTPUT);
}

void loop() {
  int RESISTOR = analogRead(A0);
  Serial.println(RESISTOR);
  RESISTOR = map(RESISTOR, 0, 1023, 0, 255);
  // map() >> 첫 번째 매개변수를 네 / 다섯번째 범위로 1:1 매핑해주는 역할
  // map(매핑하고자하는 값, 기존값의 최소값, 기존값의 최대값, 매핑할 값의 최소값, 매핑할 값의 최대값);
  // map(50, 50, 100, 0, 50); 
  // 첫 번쨰 매개변수 >> 50 >> 50 - 100
  // 결과값 >> 0 >> 0 - 50 
  analogWrite(10, RESISTOR);
  delay(500);
}