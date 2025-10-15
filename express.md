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
