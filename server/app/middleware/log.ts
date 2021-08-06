export default () => {
  return async function(ctx, next) {
    const { logger } = ctx;
    logger.info(ctx.request);
    await next();
    logger.info(ctx.response);
  };
};
