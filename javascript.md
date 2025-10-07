# Javascript

## 변수 선언 방법

중복선언 : 동일한 이름의 변수를 중복으로 선언
재할당 : 선언된 변수에 다른 값을 대입

- var
  중복선언/재할당 가능, 함수단위 scope
- let
  중복선언 불가능,재할당 가능, 블록단위 scope
- const
  중복선언/재할당 불가능(불변), 블록단위 scope

## 동적 타입

https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Data_structures

- Javascript는 동적 타입이 있는 동적 언어이다.
  Javascript의 변수는 어떤 특정 타입과 연결되지 않으며 모든 타입의 값으로 할당(또는 재할당) 가능하다.

```javascript
let foo = 42; // foo는 이제 숫자입니다
foo = 'bar'; // foo는 이제 문자열입니다
foo = true; // foo는 이제 불리언입니다
```

- Javascript는 또한 약타입 언어이다.
  약타입 언어 : 다른 타입끼리의 변환이 가능하며 암묵적으로 변환 수행
  Javascript는 작업중 타입이 맞지 않는 경우 오류가 발생하는 대신 암묵적으로 형변환이 발생합니다.
  이는 편리하지만 개발자가 의도치 않은 작업이 수행될 수 있습니다.

  반면 Java는 강타입 언어이기 때문에 개발자가 의도하지 않는 한 타입 변환이 발생하지 않습니다 (Java 묵시적 형변환을 제외하고))

```javascript
const foo = 42; // foo는 숫자입니다.
const result = foo + '1'; // JavaScript는 foo를 문자열로 강제 변환하므로, 다른 피연산자와 연결할 수 있습니다.
console.log(result); // 421
```
