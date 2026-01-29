#define GAS_AO A0
#define GAS_DO 8
#define PIEZO 12
#define LED_red 13

void setup() {
  pinMode(PIEZO, OUTPUT);
  pinMode(LED_red, OUTPUT);

  Serial.begin(9600);
  Serial.println("히터 가열 시작");
  delay(1000);
}

void loop() {
  digitalWrite(PIEZO, LOW);
  digitalWrite(LED_red, LOW);

  float sensorValue = analogRead(GAS_AO);
  float sensorDValue = digitalRead(GAS_DO);

  Serial.print("아날로그 센서 입력: ");
  Serial.println(sensorValue);

  if (sensorValue > 40){
    Serial.print("!! 연기감지 !!");
    Serial.println("");
    digitalWrite(PIEZO, HIGH);
    digitalWrite(LED_red, HIGH);
  }

  Serial.print("디지털 센서 입력: ");
  Serial.print(sensorDValue);
  Serial.println("");

  delay(1000);
}
