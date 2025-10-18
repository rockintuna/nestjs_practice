# express

https://expressjs.com/

package.json

```json
{
  "scripts": {
    "build": "tsc",
    "start:dev": "tsc-watch --onSuccess \"node dist/app.js\"",
    "prestart": "npm run build",
    "start": "node dist/app.js"
  },
  "devDependencies": {
    "@types/node": "^15.3.0",
    "prettier": "^2.2.1",
    "tsc": "^2.0.3",
    "tsc-watch": "^4.2.9",
    "typescript": "^4.3.4"
  },
  "dependencies": {
    "i": "^0.3.7"
  }
}
```

- build : 빌드 명령어
- start : app 시작 명령어
- prestart : start 명령어 전에 자동 실행
- start:dev : dev profile의 app 시작 명령어

tsconfig.json

https://www.staging-typescript.org/tsconfig

```json
{
  "compilerOptions": {
    "strict": true,
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES5",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./src",
    "incremental": true
  },
  "include": ["src/**/*"]
}
```

- include : 컴파일 대상 경로
- compilerOptions : 컴파일 설정
- compilerOptions.outDir : 컴파일 결과 저장 경로
- compilerOptions.baseUrl : module import 기본 base 경로

## install express

`npm i express`

`npm i @types/express -D`

## run express app

```typescript
import * as express from 'express';

const app: express.Express = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

`app` : Express 서버 역할을 하는 instance
`app.listen` : app 실행
`app.get` : get api router 등록

`req: express.Request` : 요청 정보를 가지고 있는 API 인자값
`res: express.Response` : 응답 정보를 가지고 있는 API 인자값
`res.send(any)` : 응답 보내기

## express middleware

`middleware` : router 들의 공통적인 작업이나 모든 http 요청의 사전 작업들을 처리해주는 등의 작업을 하는 요소

```typescript
import * as express from 'express';
import { Cat, CatType } from './app.module';

const app: express.Express = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get('/cats/blue', (req, res) => {
  res.send({ blue: Cat[0] });
});

app.get('/cats/som', (req, res) => {
  res.send({ som: Cat[1] });
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000`);
});
```

`next` : mw 콜백 함수, router 인수 모양에 next만 추가하면 mw가 됨. 다음 mw 또는 router를 실행
`app.use` : 모든 http 메서드에 대한 mw

선언 순서가 매우 중요하다.
만약 mw가 router 앞에 있으면 mw를 먼저 거치게 되고
router보다 뒤에 있으면 mw를 거치지 않고 API 처리가 종료될 수 있다.

```typescript
//json middleware
app.use(express.json());

app.post('/cats', (req, res) => {
  const data = req.body;
  Cat.push(data);
  res.status(200).send({
    success: 200,
  });
});

//using url path variable
app.get('/cats/:id', (req, res) => {
  const cat = Cat.find((cat) => {
    return (cat.id = req.params.id);
  });
  res.status(200).send({
    success: true,
    data: {
      cat,
    },
  });
});
```

router에서 json을 받으려면 express.json middleware를 사용해야 한다.

path variable은 req.params로 꺼낼 수 있다.
