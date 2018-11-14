'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async login() {
        let consume = 11111
        let token = this.app.jwt.sign({ consume }, this.app.config.jwt.secret);

        this.ctx.body = {code:1000,data:{token},msg:''};
    }
}

module.exports = LoginController;