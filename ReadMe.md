# [자바스크립트]

![image](https://media.vlpt.us/images/bigbrothershin/post/6a70929a-d760-48b1-bf44-c494499dc986/JavaScriptImg.png)

# 목차

- [배경](#배경)
- [자바스크립트 시작하기](#자바스크립트-시작하기)
- [자바스크립트 기초 문법](#자바스크립트-기초-문법)
- [변수](#변수)
- [연산자](#연산자)
- [조건문](#조건문)
- [선택문](#선택문)
- [반복문](#반복문)
- [객체](#객체)

# 배경

> HTML,CSS의 기초를 끝냈으니 이제는 JavaScript를 공부할려고 한다.
> 사실 기초가 부족하다고 느낀 이유가 JS부분에서 느낀거라서 복습을 진행하면서 꼼꼼히 봐야겠다.

`React`든 `Angular`든 뭐든, 웹을 할려면 JS가 탄탄해야 하는데, 나는 너무 `React`에 물든 것 같다. 나중에 `React`가 망하고 다른 라이브러리가 흥할수도 있는건데, 너무 한 우물만 하는 느낌이라서 웹의 원초인 JS를 열심히 해볼려고 한다.

## 자바스크립트 시작하기

**프론트엔드 개발 이해하기**

- 1단계, 고객에게 사이트 개발을 의뢰받는다.
- 2단계, 고객의 요구에 맞게 작성된 기획안을 토대로 디자이너가 화면에 보여질 UI를 디자인 한다. 이렇게 완성된 디자인 이미지를 퍼블리셔에게 전달한다.
- 3단계, 디자인 파일을 전달받은 퍼블리셔너는 그 이미지를 이용해 HTML을 작성하고 CSS를 이용해 화면의 모양을 잡아 정적인 웹 문서를 완성한다.
  **하지만 이렇게 HTML,CSS로 만들어진 웹사이트는 보이기만 할 뿐, 동작은 하지 않기때문에 JavaScript를 도입해야 한다.** 여기서 개발자들이 사용하는 것이 JavaScript나, JQuery등 을 사용하는 것이다. (이 과정을 프론트엔드 개발이라고 한다.)
- 4단계, 완성된 문서를 백엔드(Back-end)에 전달하게 되는데, PHP,ASP등의 언어를 사용해서 **보이지 않는 부분**을 개발한다. (여기서 보이지 않는 부분이라는 것은 데이터베이스와의 통신 등을 말하는 것이다.)

프론트엔드 측에서 JavaScript란 **정적인 웹 문서에 동작을 부여하는 역활**을 하게 되는데, 이제부터 우리가 배울 내용이 어떻게 동작을 부여하는지에 대해서 배울 예정이다.

> 탄생 배경 같은 부분들을 생략하도록 하겠다. 그냥 한번 구글에 검색해서 읽어보기를...

<hr>

**자바스크립트로 뭘 할수 있는가**

HTML에서는 Canvas,Drag&Drop등의 풍부한 API가 내장되어 있는데, 여기서 API란 **HTML에서 제공하는 기능의 모임이라고 생각하면 된다.** 이 API들은 자바스크립트로 만들어졌으며, 이를 사용하기 위해서는 자바스크립트를 이해하고 사용하는 것이 좋다.

최근에 `React` `Angular` `Jquery`등의 다양한 라이브러리들이 등장하면서 그 어떤 언어들보다 자바스크립트의 사용률이 대폭 증가하고 있다.

**원래는 자바스크립트는 아까 말했듯, 정적인 웹 문서에 동작을 부여하는 역활인데** 최근 Node.JS가 등장하고 백엔드에서도 작업할 수 있고, 다양한 분야에서 사용되고 있다.

> 개발 환경 준비하는 과정은 생략하도록 하겠다.

<hr>

**자바스크립트 맛보기**

```javascript
var age = prompt("당신의 나이는?", "0");
if (age >= 20) {
  document.write("당신은 성인입니다.");
} else {
  document.write("당신은 미성년자입니다.");
}
```

이렇게 스크립트 태그안에 작성을 하게 되면, 사용자측에서 프롬프트가 뜨면서 당신의 나이를 물어볼것이다. 그럴 때에 당신이 입력을 하고 기다리면 문서에 조건에 따른 값이 나올것이다.

## 자바스크립트 기초 문법

자바스크립트의 선언문은 `script`라는 태그가 시작한 부분부터 끝나는 부분까지를 스크립트 영역이라고 한다.

```html
<script>
  자바스크립트 코드;
</script>
```

이 스크립트는 `head`,`body`에 둬도 상관없는데 이 책에서는 `head`에 넣는다고 하기때문에 `head`에 넣기로 하자.

이제 실제로 한번 해볼건데, 다음과 같이 코드를 작성해보자.
o

```javascript
document.write("환영합니다.");
```

이렇게 작성하게 되면 HTML을 빌드했을때 화면에 "환영합니다."가 출력될것이다.

자바스크립트는 **객체**지향 언어인데 `document`라는 객체는 문서 객체를 의미하고, 문서 출력 메서드인 `write()`를 사용해서 문서에 출력한다.

**자바스크립트에서 주석처리를 하는 방법.**

```javascript
// 이렇게 쓰면 한줄 주석.

/*
이렇게
쓰면
여러줄
주석
*/

<!--HTML은 이렇게 사용하지롱-->
```

> **주석처리를 하는 이유?**
> 주석처리를 함으로서, 자바스크립트 선언문 안에 코드가 아닌 설명을 할 수있다. 그래서 내가 쓴 코드에 대한 설명같은 걸 달아놓으면, 나중에 협업할때 코드를 알아 볼 수 있기때문에 큰 장점이 될 수 있다.

**내부 스크립트 외부로 분리하는 방법**
자바스크립트 코드와 HTML의 코드는 분리하는게 좋다. (관리를 원할하게 하기 위해서)

```html
<script src="JS 파일 경로"></script>
```

그러면 한번 분리해보겠다.

```html
<!--statement_test.html-->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>statement_test</title>
    <script src="statement_test.js"></script>
  </head>
  <body></body>
</html>
```

```js
//statement_test.js

document.write("환영합니다.");
```

이렇게 파일을 나눠서 하면 나중에 유지보수할때 훨씬 편하다.

**코드 입력 시 주의 사항**
자바스크립트 파일을 작성할 때 몇가지 주의해야 할 사항이 있다.

- **자바스크립트는 대/소문자를 구분하여 작성한다.**
- **코드 한 줄을 작성한 후에는 (;)를 쓰는 것이 좋다.**
- **코드를 작성할 때는 한 줄에 한 문장만 작성하는 것이 좋다.**
- **문자형 데이터를 작성할 때는 큰따옴표와 작은따옴표의 겹침오류를 주의해야 한다.**
- **코드를 작성할 때 중괄호{} 또는 소괄호() 짝이 맞아야 한다.**

## 변수

변수는 변하는 데이터를 저장할 수 있는 메모리 공간이다.
**변수에는 데이터가 오직 한 개만 저장된다.**

변수에 저장할 수 있는 데이터의 종류로는 문자형(String) 숫자형(Number) 논리형(Boolean) 빈(Null) 데이터 등이 있다.

> **Var로 변수선언?**
> 옛날 책에서는 var이라는 키워드를 사용해서 변수를 선언했다면, 모던 자바스크립트는 const나 let이라는 키워드를 사용해서 변수를 선언한다.

```javascript
let 변수명;
//or
let 변수명 = 값;
```

위와 같은 방법으로 선언한다.

> **변수명을 짓는 방법?**
> 변수명에는 한글을 사용할 수 없으며, 영문과 숫자 그리고 일부 특수문자(\_,$)만 사용할 수 있다.
> 그리고 변수명에는 **의미에 맞게 짓는게 좋다.** 그리고 카멜케이스로 작성합니다.

```javascript
let box;
```

위 상태에서 box라는 변수는 선언은 했지만 값을 초기화를 해주지 않았기때문에 `undefined`라는 값을 가지게 된다. 이제 위에서 선언한 box에 값을 대입해보겠다.

```javascript
box = 100;
```

이렇게 하면 undefined에서 100이라는 값을 가지게 되었다.
그럼 만약에 box에 200을 넣고싶으면 어떻게하면 될까?

```javascript
box = 200;
```

이렇게 하게 된다면 기존의 100의 데이터는 사라질것이다.
**왜냐하면 변수에는 하나의 값만 담을수 있기 때문이다.**
이제 이렇게 작성한 변수를 화면에 출력해보겠다.

```javascript
document.write(box);
```

이렇게 하면 정상적으로 화면에 잘 출력될것이다.

이제 **자료형**에 대해서 알아보도록 하겠다.

- **문자형**
  문자형(String)데이터는 ""나 ''로 감싸고 있다.
  문자형 데이터에 태그를 포함하여 출력하면 태그로 인식한다.

  ```javascript
  const str = "<h1>안녕!</h1>";
  document.write(str);
  ```

  - Result
      <h1>안녕!</h1>

- **숫자형**
  숫자형 데이터는 단어 의미 그대로 숫자를 의미한다.
  주의해야 할것은 "100"은 숫자형 데이터가 아니다. **문자형**데이터다.

  Number()라는 함수를 사용하여 "100"을 숫자형으로 바꿀수 있다.

  ```javascript
  const num = Number("100");
  ```

- **논리형**
  논리형 데이터는 true(참) false(거짓)이 있는데, 이 데이터는 2개의 데이터를 비교할 때 나오는 결과이다.

  ```javascript
  const 변수명 = true or false;
  //또는
  const 변수명 = Boolean("안녕"); //true이다.
  ```

  `Boolean()`메서드에 데이터를 입력하면 논리형 데이터인 true나 false를 반환한다.

- **null & undefined**
  undefined는 변수가 선언되기 전의 기본값이고, null은 선언된 변수의 값이 없는 값일 경우를 가르킨다.
  또한, null은 변수에 저장된 데이터를 비우고자 할 때 사용되는 값이다.
  ```javascript
  var s; //undefined
  var t = "hello";
  t = null; //null
  ```

> **typeof란?**

    typeof를 사용하면 지정한 데이터 또는 변수에 저장된 자료형을 알고 싶을 때 사용한다.

```javascript
const num = 100;
const str = "자바스크립트";

typeof num; // number
typeof str; // string
```

## 연산자

**자바스크립트에서 연산자의 종류**

- **산술 연산자**
  산술 연산자는 + , - , \* / , %가 있다. (초등학교때 배운 그거 맞다.)

  > 산술 연산자로 연산 대상 데이터가 반드시 2개 이상 있어야 한다.

  ```javascript
  const a = 100;
  const b = 200;
  document.write(a + b);
  ```

- **문자 결합 연산자**
  문자 결합 연산자는 피연산자가 문자형 데이터이다.
  **여러개의 문자를 하나의 문자형 데이터로 결합할 때 사용한다.**

  ```javascript
  const name = "홍준혁";

  document.write("Hello My name is " + name);
  ```

- **대입 연산자**
  **대입 연산자는 데이터를 변수에 저장할 때 사용한다.**

  > **복합 대입 연산자는 뭔가요?**
  > 복합 대입 연산자는 += -= \*= /= %= 가 있는데, 산술 연산자와 대입 연산자가 **복합적**으로 적용된 것을 말한다.

- **증감 연산자**
  **증감연산자는 ++과 --가 있다.**

  > 변수의 값을 1만큼 감소시킨다.

  ```javascript
  변수--;
  --변수;
  ```

  > 변수의 값을 1만큼 증가시킨다.

  ```javascript
  변수++;
  ++변수;
  ```

  증감연산자의 위치에 따라서 결과도 다르다.

  ```javascript
  let a = 1;
  let b = ++a;
  //a는 2가 된다.
  //변수 b에는 2가 저장된다.

  let c = a++;
  //변수 c에는 2가 저장된다.
  //a는 3이 된다.
  ```

- **비교 연산자**
  `크다`,`작다`,`같다`와 같이 비교할 때 사용하는 연산자이다.

  ```javascript
  const num1 = 10;
  const num2 = 20;
  if (num1 < num2) {
    //위 비교연산자는 true를 반환한다.
    document.write("num2 is big");
  }
  ```

  ```javascript
  const num1 = 10;
  const str1 = "10";

  console.log(num1 == str2); //true
  console.log(num1 === str2); //false
  ```

- **논리 연산자**
  논리 연산자는 or, and, not이 있다.
  ```javascript
  console.log(false || true); //true
  console.log(false && true); //false
  ```
- **삼항 조건 연산자**
  삼항 조건 연산자는 조건에 따라 실행 결과가 달라진다.

  ```javascript
  const result = true && false ? "true" : "false";

  console.log(result); //"false"
  ```

### 적정 체중을 구하는 테스트기 만들기

**🛠적정 체중 구하는 법.**

```
적정 체중 = (본인 신장 - 100) x 0.9
```

```html
//source code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>체중 구하기</title>
    <script>
      const name = prompt("당신의 이름은?", "");
      const height = prompt("당신의 신장은?", "0");
      const weight = prompt("당신의 몸무게는?", "0");

      document.write(getNormal());

      function getNormal() {
        const normal = (height - 100) * 0.9;
        let result = weight >= normal - 5 && weight <= normal + 5;
        result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
        return name + " 님은 " + result;
      }
    </script>
  </head>
  <body></body>
</html>
```

### 진영이의 하루 지출 내역

총 돈이 10000원이 넘으면 얼마나 초과했는지 보여주고 아닐 시에는 돈 관리 잘했다고 칭찬하는 프로그램.

```html
<script>
  const price1 = 3000;
  const price2 = 6000;
  const price3 = 3000;

  const sum = price1 + price2 + price3;
  if (sum > 10000) {
    alert(sum - 10000 + "원 초과!");
  } else {
    alert("돈 관리 잘했어요!");
  }
</script>
```

## 조건문

조건문은 조건식의 값이 참인지 거짓인지에 따라 자바스크립트 코드를 제어한다.
**if 문**

```javascript
if(조건식){
    자바스크립트 코드;
}
```

if문에 조건식을 만족 할때만 코드를 실행한다.
만약에 조건식에 다음과 같은 값이 오게된다면,

> 0 , null , "" , undefined

false를 의미하므로 조건문을 실행하지 않는다.

**if ~ else 문**

```javascript
if(조건식){
    자바스크립트 코드;
}
else{
    자바스크립트 코드;
}
```

else문은 if문의 조건을 만족하지 못했을 때에 실행할 코드이다.

**if ~ else if ~ else 문**

```javascript
if(조건식){
    자바스크립트 코드;
}else if(조건식){
    자바스크립트 코드;
}
else if(조건식){
    자바스크립트 코드;
}
else if(조건식){
    자바스크립트 코드;
}
.
.
.
else {
    자바스크립트 코드;
}
```

if로부터 조건에 충족하지 않을때 차레대로 else if문을 검토하게 된다.
그렇게 하다가 중간에 true를 반환하면 그에 해당하는 자바스크립트 코드를 실행하고 조건문을 종료한다.

**중첩 if 문**

```javascript
if(조건식){
    if(조건식){
        ...
    }
}
```

위와 같은 코드처럼 중첩하여 조건문을 사용하는 것을 의미한다.

**지금까지 배운 조건문으로 로그인을 구현해보겠다.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>로그인</title>
    q
    <script>
      const id = "qwerty";
      const pw = "1234";

      const user_id = prompt("아이디는?", "");
      const user_pw = prompt("비밀번호는?", "");

      if (id === user_id) {
        if (pw === user_pw) {
          alert("로그인에 성공했습니다.");
          document.write("환영합니다.");
        } else {
          document.write("비밀번호가 틀렸습니다.");
        }
      } else {
        document.write("아이디가 틀렸습니다.");
      }
    </script>
  </head>
  <body></body>
</html>
```

## 선택문

<strong>선택문(switch)</strong>문은 변수에 저장된 값과 switch문에 있는 경우(case)의 값을 검사하여 변수와 경우의 값이 일치하는 경우 그에 해당하는 코드를 실행한다.

```javascript
const value = 초기값;

switch(value){
    case 값1:
        코드1;
    case 값2:
        코드2;
    case 값3:
        코드3;
    ...
    default 코드;
}
```

**default는 case에 없는 경우를 의미한다.**

**배운 switch문을 이용하여 프로그램을 만들어보자.**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Switch Test</title>
    <script>
      const favorite = prompt("당신이 좋아하는 과일은?", "");
      switch (favorite) {
        case "사과":
          document.write("사과를 좋아하는군요!");
          break;
        case "바나나":
          document.write("바나나 좋아하는군요!");
          break;
        case "배":
          document.write("배를 좋아하는군요!");
          break;
        default:
          alert("보가에 없는 값입니다.");
      }
    </script>
  </head>
  <body></body>
</html>
```

> **각 case마다 break를 걸어주는 이유?**
> 브레이크를 걸지 않으면, 처음 충족하는 case를 실행한 다음 밑에 case도 검토를 하기 때문에, 원하는 작업을 하고 끝낼려면 break를 걸어주어야 한다.

## 반복문

반복문을 사용하면 원하는 횟수만큼 반복하여 실행할 수 있다.

**while문**

```javascript
const value = 초기값;
while(조건){
    자바스크립트 코드;
    증감식;
}
```

while문의 실행 순서는

1. 조건식을 검사하고
2. 만족한다면 중괄호 안에 코드와 증감식을 실행한다.

를 반복한다.

이때, 증감식을 써주는 이유는 **실행한 횟수에 따른 조건 값을 다르게 하고 싶기 때문이다.**

```javascript
let i = 0;
while (i < 10) {
  document.write("안녕하세요" + i, "<br />");
  i++;
}
```

이렇게 작성해주면 반복을 10번을 하게된다.

**while문을 사용해서 1 ~ 100까지 짝수만 출력하는 프로그램을 만들어보도록 하자.**

```javascript
let i = 1;
while (i <= 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
console.log("==The End==");
```

**do while문**
do while은 while문과 유사하지만, 조금 다른점이 있다면 조건의 여부와는 상관없이 무조건 처음 한번은 실행하고 조건식을 검사한다.

```javascript
let value = 초기값;

do{
    자바스크립트 코드;
    증감식;
}while(조건식);
```

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

**for 문**
for문은 조건식을 만족할 때까지 특정 코드를 반복하여 실행한다.

```javascript
for(초기값; 조건식; 증감식){
    자바스크립트 코드;
}
```

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

**break 문**
반복문에서 break를 만나게 되면 그 반복문은 강제로 중단된다.

```javascript
for (let i = 0; i < 100; i++) {
  if (i === 70) {
    break;
  }
}
```

**continue 문**
반복문에서만 사용할 수 있는데, 반복을 하다가 continue를 만나게 되면 continue 밑에 있는 코드들을 무시하고 바로 다음 조건식으로 이동한다.

# 객체

자바스크립트는 객체 기반의 언이이다.
객체를 쉽게 이해하기 위해서 예시를 하나 들어보도록 하겠다.

> TV가 하나의 객체라고 해보면, TV에는 끄다,키다,음소거하다,볼륨을높히다...등등 많은 기능들이 있는데, 바로 이것이 객체의 개념이다. 하나의 사물을 객체라고 하고, 그 객체안에 다양한 기능,속성들이 있는것이다.

자바스크립트 객체 안에는 메서드, 속성이 있다.

```javascript
객체.메서드();
객체.속성; 또는 객체.속성 = 값;
```

이렇게 접근할 수 있다.

여기서 메서드에 대해서 알아보자면,

```javascript
TV.TV를 키다();
```

이런 개념이다.

속성은 다음과 같다.

```javascript
TV.TV의 길이;
```

**여기서 중요한 점은 객체안에 존재하지 않는 메서드,속성은 접근할 수 없다.**

```javascript
TV.폭팔해라();
```

위의 코드와 같은 기능은 일반적인 TV에 있는 기능이 아니므로 오류가 발생한다.

**객체의 종류**

자바스크립트 객체의 종류에는 크게 **내장 객체, 브라우저 객체, 문서 객체 모델로** 나눌 수 있다.

- **내장 객체**
  내장 객체는 자바스크립트 엔진에 내장되어 있어 필요한 경우 생성해서 사용할 수 있다.
  대표적인 내장 객체로는 Math(수학), Date(날짜), Array(배열) 등 이 있다.
- **브라우저 객체 모델**
  브라우저 객체 모델(BOM)은 브라우저에 계층 구조로 내장되어 있는 객체를 말한다.
  대표적인 브라우저 객체로는 window, screen, location, history등이 있으며,
  window는 document와 location 객체의 상위 객체이다.
- **문서 객체 모델**
  문서 객체 모델(DOM)은 HTML문서 구조를 의미한다.
  HTML문서의 기본 구조는 최상위 객체로 html이 있으며, 하위 객체로는 head,body가 있다.
  자바스크립트에서 DOM의 구조를 변경하고 싶으면 문서객체모델을 잘 이해해야 한다.

하지만 IE8 이하 버전에서는 호환성이 떨어지기 때문에 사용하기 힘들다는 단점이 있다.

> 이제부터 위에 설명한 세가지의 객체에 대해서 자세히 알아보도록 하겠다.

## 내장 객체

위에서 언급했듯 내장 객체는 자바스크립트 엔진에 있는 객체이다.

내장 객체를 생성하는 기본형에 대해서 알아보자.

```javascript
참조_변수(인스턴스_이름) = new 생성_함수();
```

이제 내장 객체를 이용해서 tv라는 객체를 생성을 해보겠다.

```javascript
const tv = new Object();

tv.color = "black";
tv.price = 3000000;
tv.intro = () => {
  console.log("TV 색깔 : " + tv.color);
  console.log("TV 가격 : " + tv.price);
};

tv.intro();
//객체 메서드 호출
```

자바스크립트에서 지원하는 Object객체 를 사용해 보았는데, 이번에는 `Date`라는 객체를 사용해보겠다.

```javascript
참조 변수 = new Date();
```

```javascript
const today = new Date();

console.log(today.getHours());
```

> 남은 일 수(밀리초) = 특정 날짜 객체 - 현재 날짜 객체

```javascript
const today = new Date();
const nowYear = today.getFullYear();

const theDate = new Date(nowYear, 11, 31);
const diffDate = theDate.getTime() - today.getTime();

const result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
console.log(`연말까지 ${result}일 남았습니다.`);
```

**수학 객체**

수학 객체는 알고리즘 풀때 자주 쓰이므로 알아두는게 좋다.

- Math.abs()
  > 숫자의 절대값을 반환합니다.
- Math.max()
  > 숫자 중 가장 큰 값을 반환합니다.
- Math.min()
  > 숫자 중 가장 작은 값을 반환합니다.
- Math.pow()
  > 숫자의 거듭제곱값을 반환합니다.
- Math.random()
  > 0 ~ 1 사이의 난수를 반환합니다.
- Math.round()
  > 소수점 첫째 자리에서 반올림하여 정수를 반환합니다.
- Math.ceil()
  > 소수점 첫째에서 무조건 올림하여 정수를 반환합니다.
- Math.floor()
  > 소수점 첫째에서 무조건 내림하여 정수를 반환합니다.
- Math.sqrt()
  > 숫자의 제곱근값을 반환합니다.
- Math.PI
  > 원주율 상수를 반환합니다.

**0 ~ 10까지 랜덤숫자**

```javascript
const randomNum = Math.floor(Math.random() * 11);
```

**배열 객체**
변수에는 한가지의 데이터만 저장된다고 했었는데, 그러면 여러 개의 데이터를 저장할려면 **배열**을 사용해야 된다.

```javascript
변수 = new Array(값);
```

```javascript
const arr = new Array(1, 2, 3);
```

배열은 각 인덱스에 접근할 수 있다.

```javascript
const arr = new Array(1, 2, 3);

console.log(arr[1]);
```

### 배열 메서드

- join
  > 배열 객체의 데이터를 연결 문자 기준으로 1개의 문자형 데이터로 반환합니다.
- reverse
  > 배열 객체의 데이터 순서를 거꾸로 바꾼 후 반환합니다.
- sort
  > 배열 객체의 데이터를 오름차순으로 정렬합니다.
- slice
  > 배열 객체의 데이터 중 원하는 인덱스 구간만큼 잘라서 배열 객체로 가져옵니다.
- splice
  > 배열 객체의 지정 데이터를 삭제하고 그 구간에서 새 데이터를 삽입할 수 있습니다.
- concat
  > 2개의 배열 객체를 하나로 결합합니다.
- pop
  > 배열에 저장된 데이터 중 마지막 인덱스에 저장된 데이터를 삭제합니다.
- push
  > 배열 객체의 마지막 인덱스에 새 데이터를 삽입합니다.
- shift
  > 배열 객체에 저장된 데이터 중 첫 번째 인덱스에 저장된 데이터를 삭제합니다.
- unshift
  > 배열 객체의 가장 앞의 인덱스에 새 데이터를 삽입합니다.
- length
  > 배열에 저장된 총 데이터의 개수를 반환합니다.

등등...

**문자열 객체**

문자열 객체는 문자혈 데이터를 객체로 취급하는 것이다.

```javascript
참조 변수 = new String(문자형 데이터);
```

문자열 객체는 다음과 같이 선언해도 객체가 생성된다.

```javascript
참조 변수 = "문자형 데이터";
```

### 문자열 메서드

- charAt
  > 문자열에서 인덱스 번호에 해당하는 문자를 반환한다.
- indexOf
  > 문자열에서 왼쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인데스 번호를 반환한다.
- lastIndexOf
  > 문자열에서 오른쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인데스 번호를 반환한다.
- match
  > 문자열에서 왼쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 먼저 찾은 문자를 반환한다. 없으면 null
- replace
  > 문자열에서 왼쪽부터 바꿀 문자와 일치하는 문자를 찾아 제일 먼저 찾은 문자를 새 문자로 치환한다.
- search
  > 문자열에서 왼쪽부터 찾을 문자와 일치하는 문자를 찾아 제일 먼저 일치하는 인덱스 번호를 반환한다.
- slice
  > a개의 문자를 자르고 b번째 이후에 문자를 자른 후 남은 문자를 반화한다.
- substring
  > a인덱스부터 b인덱스 이전 구간의 문자를 반환한다.

등등...

## 브라우저 객체 모델

- **window 객체의 메서드 종류**
  - open
    > URL 페이지를 새 창으로 나타냅니다.
  - alert
    > 경고 창을 나타내고 데이터를 보여줍니다.
  - prompt
    > 질문과 답변으로 질의응답 창을 나타냅니다.
  - move
    > 지정한 새 창의 위치를 이동합니다
  - resizeTo
    > 지정한 새 창의 위치를 이동합니다.
  - setInterval
    > 지속적으로 일정한 시간 간격으로 함수를 호출하여 코드를 실행합니다.
  - setTimeout
    > 단 한 번 일정한 시간 간격으로 함수를 호출하여 코드를 실행한다.
- **screen 객체의 속성 종류**
  - screen.width
    > 화면의 너비값을 반환
  - screen.height
    > 화면의 높이값을 반환
  - screen.availWidth
    > 작업 표시줄을 제외한 화면의 너비값을 반환
  - screen.availHeight
    > 작업 표시줄을 제외한 화면의 높이값을 반환
  - screen.screenDepth
    > 사용자 모니터가 표현 가능한 컬러 bit를 반환
- **location 객체의 속성,메서드 종류**

  - location.href
    > 주소 영역의 참조 주소를 설정하거나 URL을 반환한다.
  - location.hash
    > URL의 해시값을 반환한다.
  - location.hostname
    > URL의 호스트 이름을 설정하거나 반환한다.
  - location.host
    > URL의 호스트 이름과 포트번호를 반환한다.
  - location.protocol
    > URL 프로토콜을 반환한다.
  - location.search
    > URL의 쿼리를 반환한다.
  - location.reload()
    > 페이지를 새로고침한다.

- **history 객체의 속성 종류**
  - history.back()
    > 이전 방문 사이트로 이동한다.
  - history.foward()
    > 다음 방문 사이트로 이동한다.
  - history.go()
    > 이동 숫자에 -2를 입력하면 2단계 이전의 방문 사이트로 이동한다.
  - history.length
    > 방문 기록에 저장된 목록의 개수를 반환한다.

## 함수

**함수란?**

> 변수에는 데이터를 저장한다고 했었는데, 함수에는 코드를 메모리에 저장했다가 필요할때 마다 호출하여 사용할 수 있다.

- 함수는 자바스크립트 코드를 저장한다.
- 출력문, 제어문 등의 코드를 저장하고 데이터를 반환한다.

```javascript
function 함수명(){
    자바스크립트 코드;
}
or
const 함수명 = () => {
    자바스크립트 코드;
}
```

함수정의문 {...} 안에 작성된 코드는 즉시 실행되지 않고, 메모리에 할당되어 있다가 함수가 호출되면 실행하는 형식이다.

> **function과 function()은 다르다?**
> function은 함수 그 자체를 의미하는거고 function()은 함수를 실행하라는 의미이다.

```javascript
function sayHello() {
  console.log("Hello");
}

sayHello();
```

**자바스크립트를 이용해 버튼을 클릭할때 마다 배경색을 바꾸는 프로그램**

![image](https://user-images.githubusercontent.com/48292190/115477708-7d336a80-a27f-11eb-8854-2145107fada8.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Background</title>
    <script>
      const color = ["white", "yellow", "aqua", "purple"];

      let i = 0;
      const changeColor = () => {
        i++;
        if (i >= color.length) {
          i = 0;
        }
        console.log(color[i]);
        const bodyTag = document.querySelector("body");
        bodyTag.style.backgroundColor = color[i];
      };
    </script>
  </head>
  <body>
    <button onclick="changeColor()">배경색 바꾸기</button>
  </body>
</html>
```

**매개 변수가 있는 함수 정의문**
함수를 호출하면서 값을 전달할수 있는 방법은 매개 변수를 받으면 된다.
```javascript
function sayHelloWithName(name){
    console.log(`${name}, Hello!`);
}
```
이때, 매개변수는 한개뿐만이 아니라 여러개가 될 수도있다.

**함수에서의 return문의 역할**

return문은 함수에서 결괏값을 반환할 때 사용한다. 또한, 함수가 종료된다.

```javascript
//함수가 종료
function returnExample(){
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    return;
    console.log("Hello"); // not working
}
```

```javascript
//결과값을 반환
function returnValueExample(){
    return 10 + 20;
}

const value = returnValueExample();
console.log(value); //30
```

**함수 스코프란?**
> 함수 스코프의 의미는 유효 범위를 의미한다.

스코프를 이해하기 위해서는 Local변수와 Global변수를 이해해야 한다.

```javascript
let global; // 글로벌 변수

function a(){
    let local; // 로컬 변수
}
```

```javascript
let score = 100;

function a(){
    let score = 50;

    console.log(score); //50
}

a();

console.log(score); //100
```

**전역 함수와 지역 함수**
```javascript
function a(){ // 전역 함수
    자바스크립트 코드;
}

function b(){
    function c(){ // 지역 함수
        자바스크립트 코드;
    }
}
```