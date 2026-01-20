int BLUE_LED = 10;         
int GREEN_LED = 11;
int RED_LED = 12;

void setup() {
  pinMode(BLUE_LED, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  pinMode(RED_LED, OUTPUT);
}

// 버전2: 모든 LED가 켜진 뒤 0.5초 동안 유지하고, 모든 LED를 끈 뒤 0.5초 유지
void loop() {
  digitalWrite(RED_LED, HIGH);    
  digitalWrite(GREEN_LED, HIGH);    
  digitalWrite(BLUE_LED, HIGH);    
  delay(500);  

  digitalWrite(RED_LED, LOW);    
  digitalWrite(BLUE_LED, LOW);           
  digitalWrite(GREEN_LED, LOW);    
  delay(500);                 
}  
