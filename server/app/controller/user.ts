import { Controller } from 'egg';
import { UserSchema } from '../model/user';

export default class UserController extends Controller {
  private readonly _userService = this.ctx.service.user;

  public async create() {
    const { request } = this.ctx;
    this.logger.info(UserSchema);
    this.ctx.body = await this._userService.create(request.body);
  }
}
