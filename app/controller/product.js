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


    mini_queryProductById(){

    }

    /*
    * 增加产品
    * */
    web_editProduct(){

    }
    /*
     * 删除产品
     * */
    deleteProduct(){

    }
    /*
     * 根据id查询产品
     * */
    queryProductById(){

    }
    /*
     * 分页查询产品
     * */
    queryProductByPage(){

    }

}

module.exports = ProductController;

