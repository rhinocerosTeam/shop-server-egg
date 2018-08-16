/**
 * Created by songpeilan on 2018/8/16.
 */
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world';
    }
    async info() {
        const ctx = this.ctx;
        const userId = ctx.params.id;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }
}

module.exports = HomeController;