'use strict'
const Controller = require('egg').Controller
const defaultAvatar = 'http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png'

class UserController extends Controller {
    //注册
    async register() {
        //解析请求体 username password
        //校验参数
        //检索数据库 username是否存在
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        if(!username || !password) {
            ctx.body = {
                code: 400,
                msg: '用户名或密码不能为空'
            }
            return 
        }
        //数据库操作 查询usrname是否存在
        const userInfo = await ctx.service.user.getUserByName(username);
        console.log(userInfo,'userInfo');
        //如果用户已经存在
        if (userInfo && userInfo.id) {
            ctx.body = {
              code: 400,
              msg: '账户已经被注册,请重新输入',
              data: null
            }
            return;
          }
        //如果用户不存在 注册
        const result = await ctx.service.user.register({
            username,
            password: hashedPassword,
            avatar: defaultAvatar,
            ctime:  +Date.now(),
            signature: '这个人很懒,什么都没有留下',
          })
    }
    
    async login() {
        const { ctx } = this;
        ctx.body = '用户登录'
    }

}
module.exports = UserController;