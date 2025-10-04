import 'express';
import { AuthInfo } from 'src/auth/auth.info';

declare module 'express' {
  export interface Request {
    user?: AuthInfo;
  }
}
