# 주석은 프로그램 실행에 영향을 주지 않는 텍스트 입니다.

'''
다음은 다중 줄 주석입니다.
여러 줄의 설명을 적을 때 사용합니다.
'''

#print 문법
#print(출력할_값1, 출력할_값2 sep="여러값 구분자", end="줄바꿈 구분자")
print("화이팅")

print("Hello World")

#print 구분자 옵션
#sep: 기본값 = 공백
print("가", "나", "다", sep="-")

#print 줄바꿈 옵션
#end
print("안녕하세요.", end=" ")
print("반갑습니다")

#변수의 선언과 할당
#변수이름 = "할당할 자료"
#가능한 변수 이름: age, 이름, my_name, myFamily2, _fruit
#불가능한 변수 이름: 50, 내 이름, 2_my_fmaily, print if
#에러가 발생한 변수명
#1st_place = "Gold"  >> 숫자가 처음으로 나와서 불가능한 변수
#user name = "Alice" >> 중간에 공백에 있어 불가능한 변수
#class = "Math" >> 예약어(keyword)로 인한 불가능한 변수

#변수
'''
-변수: 자료를 저장하는 공간
-선언: 별수를 만드는 것
-할당: 변수에 값을 저장하는 것
-초기화: 처음으로 변수에 값을 할당하는 것
- =: 대입연산자, 같다 의미 X, 값을 할당한다는 의미
'''

#변수의 선언과 할당
변수이름 = "저장할 자료값"
print(변수이름)

#변수이름 규칙
#1st_place = "Gold" X
first_place = "Gold"

#user name = "wdh" X
user_name = "wdh"

#clss = "Math" (예약어 X)

#좋은예제: 간단하고 명확한 값 할당
name, age, grade = "Alice", 14, 2
print("이름:", name)
print("나이:", age)
print("학년:", grade)

#안좋은 예제: 복잡하거나 가독성이 떨어지는 경우
#과도하게 많은 변수와 계산을 한 줄로 대입
a, b, c, d = 10 + 5, (3 * 4) - 2, 7 // 2 + 1, 2 ** 3 % 5
print(a, b, c, d)

#변수의 특징
#저장한 값 변경 가능, 단 한번에 하나씩만 저장
#한 줄에 여러 변수
  
a = 1
b = 2
c = 3

a, b, c = 1, 2, 3
print(a, b, c) #1, 2, 3

X = 10
Y = 20

X, Y = Y, X #X, Y 값을 맞바꿈
print(X, Y) #20, 10

#식별자 작성 스타일
#1. 스네이크 케이스: 모든 단어를 _로 연결
my_variable_name = 10
MY_VARIABLE_NAME = 100

#2. 파스칼 케이스: 모든 단어의 첫글자를 대문자로 시작
class MyClassName:
    ...

#3. 카멜 케이스: 첫 단어는 소문자, 이후 단어는 대문자로 시작
myVariableName = 10