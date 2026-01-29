void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  int LIGHT = analogRead(A0);
  Serial.println(LIGHT);

  if (LIGHT > 940)
    digitalWrite(13, HIGH);
  else
    digitalWrite(13, LOW);
}
