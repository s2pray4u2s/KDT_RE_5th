
void setup() {
  pinMode(3, OUTPUT);
}

void loop() {
  for(int brightness = 0; brightness <= 255; brightness += 64) {
    analogWrite(3, brightness);  // 0, 64, 128, 192, 256
    delay(1000);
  }
}