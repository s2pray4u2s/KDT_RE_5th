int RED_LED = 12;
int BLUE_LED = 10;         
int GREEN_LED = 11;

void setup() {
  pinMode(RED_LED, OUTPUT);
  pinMode(BLUE_LED, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
}

void loop() {
  digitalWrite(RED_LED, HIGH);    
  delay(500);
  digitalWrite(GREEN_LED, HIGH);    
  delay(500);  
  digitalWrite(BLUE_LED, HIGH);    
  delay(500);  
  digitalWrite(RED_LED, LOW);    
  delay(500);
  digitalWrite(BLUE_LED, LOW);    
  delay(500);           
  digitalWrite(GREEN_LED, LOW);    
  delay(500);                 
}  