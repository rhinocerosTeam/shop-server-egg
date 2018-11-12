'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
    async index() {
        const _ctx = this.ctx
        const products = await _ctx.model.Product.findAll({
            include: { model: this.ctx.model.ProductSpec, as: 'specs' },
        })
        _ctx.body = products;
    }
}

module.exports = ProductController;

