#define TRIG 9
#define ECHO 10
#define PIEZO 12
#define LED_red 13

void setup() {
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(PIEZO, OUTPUT);
  pinMode(LED_red, OUTPUT);
}

void loop() {
  digitalWrite(PIEZO, LOW);
  digitalWrite(LED_red, LOW);

  digitalWrite(TRIG, HIGH);
  delay(10);
  digitalWrite(TRIG, LOW);

  float duration = pulseIn(ECHO, HIGH);
  float distance = ((34000 * duration) / 1000000) / 2;

  Serial.print(distance);
  Serial.println(" CM");
  delay(100);

  if (distance < 100) {
    Serial.println("PIEZO - LED_red");
    digitalWrite(PIEZO, HIGH);
    digitalWrite(LED_red, HIGH);
    }
  delay(100);
}
