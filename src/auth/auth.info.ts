export interface AuthInfo {
  sub: number;
  username: string;
  roles: string[];
  iat: number;
  exp: number;
}
