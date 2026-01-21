void setup() {
  Serial.begin(9600);
  pinMode(10, OUTPUT);
}

void loop() {
  int RESISTOR = analogRead(A0);
  Serial.println(RESISTOR);
  RESISTOR = map(RESISTOR, 0, 1023, 0, 255);
  analogWrite(10, RESISTOR);
  delay(500);
}