int switch1 = 12;
int switch2 = 11;

int led_red = 4;
int led_green = 3;

void setup() {
  Serial.begin(9600);
  
  pinMode(switch1, INPUT_PULLUP);
  pinMode(switch2, INPUT_PULLUP);

  pinMode(led_red, OUTPUT);
  pinMode(led_green, OUTPUT);
}

void loop() {
  int SW1 = digitalRead(switch1);
  int SW2 = digitalRead(switch2);

  digitalWrite(led_red, LOW);
  digitalWrite(led_green, LOW);

  if (SW1 == LOW) {
    Serial.println ("switch: red");
    digitalWrite(led_red, HIGH);
  }

  if (SW2 == LOW) {
    Serial.println ("switch: green");
    digitalWrite(led_green, HIGH);
  } 
  delay(100);
}
