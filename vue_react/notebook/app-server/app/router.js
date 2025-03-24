/**
 * @param {Egg.Application} app - egg application
 */
// commonjs 模块 路由模块
module.exports = app => {
  // app 应用
  // router 路由
  // controller 控制器
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/post', controller.post.index);
  router.get('/user/:id', controller.home.user);
  router.post('/add', controller.home.add);
  // 用户模块
  router.post('/register', controller.user.register); // 登录
  router.post('/login', controller.user.login); // 注册
};