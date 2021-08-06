let UserSchema;

export default app => {
  const { Schema } = app.mongoose;
  UserSchema = new Schema({
    email: {
      type: String,
      unique: [ true, '邮箱已存在，请直接登录' ],
      required: [ true, '请输入邮箱' ],
      validate: val => {
        const reg = /^[\w\d._]+@[\w\d.]+\.com$/;
        return reg.test(val);
      },
    },
    username: {
      type: String,
      unique: [ true, '用户名已存在，请直接登录' ],
    },
    password: {
      type: String,
      required: [ true, '请输入登录密码' ],
    },
    displayName: {
      type: String,
    },
    role: {
      type: [ String ],
    },
  });
  return app.mongoose.model('User', UserSchema);
};

export {
  UserSchema,
};
