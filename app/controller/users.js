'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const _ctx = this.ctx
        const users = await _ctx.model.Users.findAll()
        _ctx.body = users;
    }
}

module.exports = UserController;

