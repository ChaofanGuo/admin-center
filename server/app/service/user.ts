import { Service } from 'egg';

export default class UserService extends Service {
  private readonly _userModel = this.ctx.model.User;

  public async create(user) {
    return await this._userModel.create(user);
  }

  public async get(id) {
    return (id)
      ? await this._userModel.findById(id)
      : null;
  }

  public async search(query) {
    return await this._userModel.find(query);
  }

  public async update(user): Promise<boolean> {
    if (!user._id) return false;
    const result = await this._userModel.update(user);
    return !!result;
  }

  public async delete(id) {
    return await this._userModel.deleteOne({ _id: id });
  }
}
