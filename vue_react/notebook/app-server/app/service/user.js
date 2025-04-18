"use strict"
const Service = require("egg").Service

class UserService extends Service {


    async getUserByName(username) {
        const { ctx } = this;
        try {
            const result = await ctx.model.User.findOne({
                where: {
                    username
                }
            })
            // console.log(result,'result')
            return result;

        }catch (error) {
            console.log(err)
            return null
        }
    }

    // 注册
    async register(user) {
        const { ctx } = this
        try {
          // orm 
          // sequelize
          const result = await ctx.model.User.create(user)
          return result
        } catch(err) {
          console.log(err);
          return null;
        }
      }

}

module.exports = UserService