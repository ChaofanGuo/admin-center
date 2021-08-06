import { Service } from 'egg';

export default class LoginService extends Service {
  public async login(username: string, password: string): Promise<any> {
    return `username is : ${username}, password is : ${password}`;
  }
}
