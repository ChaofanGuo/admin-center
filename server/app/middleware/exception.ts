export default () => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (e) {
      ctx.logger.error(e);
      ctx.response.status = 500;
      ctx.response.message = e.message;
      ctx.body = `some error happened: \r\n${e.message}\r\n==================================\r\n${e.stack}`;
    }
  };
};
