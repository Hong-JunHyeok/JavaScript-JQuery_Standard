# [자바스크립트 + 제이쿼리 입문]

![image](https://media.vlpt.us/images/bigbrothershin/post/6a70929a-d760-48b1-bf44-c494499dc986/JavaScriptImg.png)

# 목차

- [배경](#배경)
- [자바스크립트 시작하기](#자바스크립트-시작하기)
- [자바스크립트 기초 문법](#자바스크립트-기초-문법)
- [변수](#변수)
- [연산자](#연산자)

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
주석처리를 함으로서, 자바스크립트 선언문 안에 코드가 아닌 설명을 할 수있다. 그래서 내가 쓴 코드에 대한 설명같은 걸 달아놓으면, 나중에 협업할때 코드를 알아 볼 수 있기때문에 큰 장점이 될 수 있다.

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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>statement_test</title>
    <script src="statement_test.js"></script>
</head>
<body>
    
</body>
</html>
```

```js
//statement_test.js

document.write("환영합니다.")
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
옛날 책에서는 var이라는 키워드를 사용해서 변수를 선언했다면, 모던 자바스크립트는 const나 let이라는 키워드를 사용해서 변수를 선언한다.

```javascript
let 변수명; 
//or
let 변수명 = 값; 
```
위와 같은 방법으로 선언한다. 
> **변수명을 짓는 방법?**
변수명에는 한글을 사용할 수 없으며, 영문과 숫자 그리고 일부 특수문자(_,$)만 사용할 수 있다.
그리고 변수명에는 **의미에 맞게 짓는게 좋다.** 그리고 카멜케이스로 작성합니다.

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
    const str = "<h1>안녕!</h1>"
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
    var t = 'hello';
    t = null; //null
    ```

> **typeof란?**
    typeof를 사용하면 지정한 데이터 또는 변수에 저장된 자료형을 알고 싶을 때 사용한다.

```javascript
const num = 100;
const str = "자바스크립트";

typeof num // number
typeof str // string
```

## 연산자

**자바스크립트에서 연산자의 종류**
- **산술 연산자**
    산술 연산자는 + , - , * / , %가 있다. (초등학교때 배운 그거 맞다.)
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
    복합 대입 연산자는 += -= *= /= %= 가 있는데, 산술 연산자와 대입 연산자가 **복합적**으로 적용된 것을 말한다.

- **증감 연산자**
    **증감연산자는 ++과 --가 있다.**
    > 변수의 값을 1만큼 감소시킨다.
    ```javascript
    변수 --; 
    -- 변수;
    ```
    > 변수의 값을 1만큼 증가시킨다.
    ```javascript
    변수 ++;
    ++ 변수;
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
    if(num1 < num2){
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
    console.log(false || true) //true
    console.log(false && true) //false
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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>체중 구하기</title>
    <script>
        const name = prompt("당신의 이름은?","");
        const height = prompt("당신의 신장은?","0");
        const weight = prompt("당신의 몸무게는?","0");

        document.write(getNormal());

        function getNormal(){
            const normal = (height- 100) * 0.9;
            let result = weight >= normal - 5 && weight <= normal + 5;
            result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
            return name+" 님은 "+result;
        }    
    </script>
</head>
<body>
    
</body>
</html>
```


