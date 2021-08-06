import { Controller } from 'egg';

export default class LoginController extends Controller {
  private readonly _loginService = this.ctx.service.login;

  public async login() {
    const { params } = this.ctx;
    this.ctx.body = await this._loginService.login(params.username, params.password);
  }
}
