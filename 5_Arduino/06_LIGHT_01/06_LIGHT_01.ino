void setup() {
  Serial.begin(9600);
}

void loop() {
  int LIGHT = analogRead(A0);
  Serial.println(LIGHT);
}
