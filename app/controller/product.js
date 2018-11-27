'use strict';

const Controller = require('egg').Controller;
const paramUtil = require('../utils/param')
class ProductController extends Controller {
    async index() {
        const _ctx = this.ctx
        const products = await _ctx.model.Product.findAll({
            include: { model: this.ctx.model.ProductSpec, as: 'specs' },
        })
        _ctx.body = products;
    }


    // mini_queryProductById(){
    //
    // }
    /**
     * 编辑商品
     *
     *
     * **/
    async editProduct(){
        // 封装参数
        const _ctx = this.ctx
        let params = paramUtil.get(this.ctx)
        console.log('params',params)

        let specList = params.skuList

        delete params.skuList
        let product = params

        // 数据存储
        let productObj = await _ctx.model.Product.create(product)

        console.log({productObj})

        specList.map(async (obj)=>{
            obj.productId = productObj.id
            await _ctx.model.ProductSpec.create(obj)
        })


        _ctx.body = {specList,product,productObj};

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

