const int PIEZO_PIN = 8;
const int SWITCH = 3;

void setup() {
  Serial.begin(9600);
  pinMode(PIEZO_PIN, OUTPUT);
  pinMode(SWITCH, INPUT_PULLUP);
}

void loop() {
  int swithchState = digitalRead(SWITCH);
  digitalWrite(PIEZO_PIN, LOW);

  if (swithchState == LOW) {
    Serial.println("부저 ON!!");
    digitalWrite(PIEZO_PIN, HIGH);
  }
  delay(100);
}