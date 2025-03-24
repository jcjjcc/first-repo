const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const {id} = ctx.query
    ctx.body = `hi, egg ${id}`;
  }

  async user(){
    const {ctx} = this;
    const {id} = ctx.params;
    //controller 调用service层 service完成数据查询的任务
    const {name,slogen} = await ctx.service.home.user();
    ctx.body =  {
      name,
      slogen
    }
  }
  async add(){
    const {ctx} = this;
    const {title} = ctx.request.body;
    ctx.body = {
      title
    }
  }

}

module.exports = HomeController;
