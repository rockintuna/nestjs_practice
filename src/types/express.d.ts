import 'express';

declare module 'express' {
  export interface Request {
    user?: string; // 실제 유저 타입으로 변경 가능
  }
}
