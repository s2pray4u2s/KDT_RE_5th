'''
#자료형
'''

#정수형 (integer, int)
a = 10
b = -999
c = 12345678901234567890 #큰 수도 가능

my_int1 = 100
my_int2 = 999999999999999999999
print(type(my_int1)) #<class 'int'>

#실수형 (float) 
#부동 소수점 방식
pi = 3.14
gravity = - 9.8

my_float = 100.0
print(type(my_float)) #<class 'float'>

#문자열 (string, str)
my_str1 = ' ' #빈 문자열
my_str2 = " " # 공백 문자열
my_str3 = "See you tomorrow"

#문자열 여러줄로 만들기
multi_str = """코딩을 하는
처음 배우는
파이썬 언더
"""
print(multi_str)
print(type(my_str1)) #<class 'str'>

#따옴표 속 따옴표 쓰기
print("'python' 코딩언어")
#print(""에러"")

#불리언형 = 논리형 (boolean, bool)
#참과 거짓을 표현하는 자료형
print(True)
print(False)
print(type(True)) #<class 'bool'>

'''
#형변환 (Type Casting)

#1. 명시적 형변환

1. 정수로 변환 : int ()

1) 실수 > 정수
2) 문자열로 표현돈 정수 > 정수
3) 논리형 > 정수
'''

#가능
print(int(3.14))  # 3
print(int("100"))  # 100
print(int(True))  # 1
print(int(False))  # 0 

#불가능
#print(int("3.14"))
#print(int("abc"))

'''
2. 실수로 변환 : float ()

1) 정수 > 실수
2) 문자열로 표현된 실수 > 실수
3) 문자열로 표현된 정수 > 실수
4) 논리형 > 실수
'''

#가능
print(float(7))
print(float('3.14'))
print(float('100'))
print(float(True), float(False))

#불가능
#print(float("abc"))

'''
#2. 암시적 형변환
#정수와 실수의 연산에서 자동으로 실행되는 연산
'''
print(10 + 5.0)

#문자열로 변환 : str()
#논리형으로 변환 : bool()

print(bool(1)) #true

'''
문자열 포매팅 f-string
'''

name = "CodingOwl"
age = 5
print(f"{name} is {age} years old.")

name = "Doohee"
age = 38
print("내 이름은", name, "이고, 나이는", age, "입니다.")
print(f"내 이름은 {name} 이고, 나이는 {age} 입니다.")

'''
실습1. 영화정보 출력하기
'''

title = "Inception"
Director = "Christopher Nolan"
year = "2010"
Genre = "Sci-Fi"

print(f"Title: {title} Director: {Director} Year: {year} Genre: {Genre}" )

title = "The Avengers"
Director = "Joss Whedon"
year = "2012"
Genre = "Superhero Action"

print(f"Title: {title} Director: {Director} Year: {year} Genre: {Genre}" )

title, director, year, genre = "The Avengers", "Joss Whedon", 2012, "Superhero Action"
print(f"Title: {title} Director: {director} Year: {year} Genre: {genre}" )



'''
실습2. 자기소개하기
'''

name = "Doohee"
age = "38"
MBTI = "INFJ"

print(f"안녕하세요. \n 제 이름은 {name} 이고, \n {age} 살 입니다. \n 제 MBTI는 {MBTI} 입니다.")

print(f"""안녕하세요.
제 이름은 {name} 이고,
{age} 살 입니다.
제 MBTI는 {MBTI} 입니다.""")





