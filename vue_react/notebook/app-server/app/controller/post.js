'use strict'
const Controller = require('egg').Controller

class PostController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = '文章列表'
    }
    
}

module.exports = PostController;