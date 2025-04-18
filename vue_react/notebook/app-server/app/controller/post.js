'use strict'
const Controller = require('egg').Controller

class PostController extends Controller {
    async index() {
        //this是什么  ctx上下文 = resquest + respone 
        const { ctx } = this;
        ctx.body = '文章列表'
    }

}

module.exports = PostController;

/**
 * this 代表当前控制器实例 (PostController 的实例)
它包含了 Egg.js 框架提供的各种属性和方法
包括 ctx、app、service、config 等关键对象的引用
ctx (Context) 代表请求上下文
代表一次完整的请求/响应周期
包含 request 对象（请求相关信息）和 response 对象（响应相关信息）
提供了处理 HTTP 请求和生成响应的各种方法和属性
通过 ctx.body = '文章列表' 设置响应内容
 */