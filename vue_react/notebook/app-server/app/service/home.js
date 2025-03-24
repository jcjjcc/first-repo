//service 模块  sql 服务
'use strict'

const Service = require('egg').Service;

class HomeService extends Service {
    async user(){
        return {
            name:'egg',
            slogen:'egg is very good'
        }
    }
}
module.exports = HomeService;