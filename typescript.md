# TypeScript

- Javascript 기반의 객체 지향 언어

- TypeScript 컴파일러를 사용하여 .ts 파일을 .js 파일로 변환

- 정적 타입 검사 지원 (컴파일 오류같은)

```javascript
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
```

typescript에서는 정적 타입 검사를 통해 위 코드에서 오류가 발생한다는 것을 프로그램을 실행시키지 않고도 알 수 있다.

ref:
https://www.typescriptlang.org/ko/docs/handbook/typescript-from-scratch.html

typescript는 실제로 동작할때는 javascript로 동작한다.
즉, Typesciprt에서 명시된 타입들은 실제로 동작할때는 제거된다.

TypeScript의 타입 검사기는 사용자가 생각한 일과 JavaScript가 실제로 하는 일 사이의 불일치를 찾을 수 있게 해준다.

## 타입 추론

TypeScript는 타입을 추론해줄 수 있다.
예를 들어 변수를 생성하면서 동시에 특정 값에 할당하는 경우, TypeScript는 그 값을 해당 변수의 타입으로 사용한다.

```typescript
let helloWorld = 'Hello World';
```

타입을 위한 추가 문자 작성이 필요치 않으며,
Typescript는 helloWorld가 string 이라는 것 을 알 수 있다.

## 타입 정의

```typescript
// name: string과 id: number을 포함하는 형태의 타입 정의
interface User {
  name: string;
  id: number;
}

// 타입 User를 사용하여 객체에 타입 선언
const user: User = {
  name: 'Hayes',
  id: 0,
};

// 컴파일러에서 타입 User에는 username 속성이 없다는 경고를 보낸다!
const user_exception: User = {
  username: 'Hayes',
  id: 0,
};
```

인터페이스 -> 클래스 선언

```typescript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount('Murphy', 1);
```

implements 키워드를 사용하지 않아도 위 처럼 특정 인터페이스 타입의 클래스를 선언할 수 있다.

이때 만약 속성 정보가 다르다면 user 변수에 새로운 UserAccount 객체를 입력하는 부분에서 경고가 발생한다.

클래스 선언에서부터 경고를 확인하고자한다면

```typescript
interface User {
  name: string;
  id: number;
}

// name 속성이 없으므로 컴파일 경고가 발생한다.
class UserAccount implements User {
  username: string;
  id: number;
  constructor(username: string, id: number) {
    this.username = username;
    this.id = id;
  }
}

const user: User = new UserAccount('Murphy', 1);

console.log(user.name);

// 인터페이스 또는 클래스는 함수의 매개변수 또는 리턴 값의 타입을 명시할때도 사용할 수 있다.
function getAdminUser(): User {
  //...
}
function deleteUser(user: User) {
  // ...
}
```

## 원시 타입

typescript는 javascript의 원시 타입을 동일하게 가지고 있고
여기에 몇가지를 추가했다.

- boolean
- bigint
- null
- number
- string
- symbol
- object
- undefined

typescript 추가 원시 타입

- any(어떤 타입이든 허용, 위험성이 존재하며 이 타입의 사용은 typescript를 사용하는 목적과 상반됨)
- unknown(any와 비슷하지만 다른 타입에(any를 제외한) 대입할 수 없다는 차이가 있음, 그리고 프로퍼티 접근, 메서드 호출, 인스턴스 생성이 불가능)
- never(공집합 : 아무 값도 입력될 수 없음)
- void(undefined를 리턴하거나 리턴값 없음)
- ...

## type, interface

객체의 형식을 정의할때 사용하는건 type 과 interface가 있다.
interface를 우선적으로 사용하고 특정 기능이 필요할 때 type을 사용하자.

- 보다 간결한 에러/경고 메시지
- 중복 정의 가능 (이건 장점이라기보다는 특징)

ref :
https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220


## 타입 구성

여러가지 타입을 이용하여 복잡한 새 타입을 작성

- Union
- Generic

### Union

유니언은 타입이 여러 타입 중 하나일 수 있음을 선언하는 방법이다. 

```typescript
type MyBool = true | false;
```
MyBool은 boolean으로 분류 됩니다. (구조적 타입 시스템)

유니언이 주로 사용되는 사례는 string 또는 integer 리터럴 상수의 집합 타입을 정의할때 사용된다.

```
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```
