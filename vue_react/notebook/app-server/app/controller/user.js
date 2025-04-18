'use strict'
const Controller = require('egg').Controller
const bcrypt = require('bcryptjs') // 单向加密
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
        const hashedPassword = await bcrypt.hash(password, 10)
        //如果用户不存在 注册
        const result = await ctx.service.user.register({
            username,
            password: hashedPassword,
            avatar: defaultAvatar,
            ctime:  +Date.now(),
            signature: '这个人很懒,什么都没有留下',
          })
          
          if (result) {
            ctx.body = {
              code: 200,
              msg: '注册成功',
              data: null
            }
          } else {
            ctx.body = {
              code: 500,
              msg: '注册失败',
              data: null
            }
          }
    }


    
    async login() {
 // 参数
        const { ctx, app } = this;
        const { username, password } = ctx.request.body;
        console.log(username, password, '---------------');
        if (!username || !password) {
        ctx.body = {
            code: 400,
            msg: '用户名或密码不能为空',
            data: null
        }
        return;
        }

        const userInfo = await ctx.service.user.getUserByName(username)
        if (!userInfo || !userInfo.id) {
        ctx.body = {
            code: 500,
            msg: '用户名不存在',
            data: null
        }
        return
        }

        const isPasswordValid = await bcrypt.compare(password, userInfo.password)

        if (userInfo && !isPasswordValid) {
        ctx.body = {
            code: 500,
            msg: '密码错误',
            data: null
        }
        return 
        }

        // jwt 要给用户颁发一个token
        const token = app.jwt.sign({
            id: userInfo.id,
            username: userInfo.username,
            exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24小时过期
          })
      
          ctx.body = {
            code: 200,
            msg: '登录成功',
            data: {
              token
            }
          }

}




}
module.exports = UserController;