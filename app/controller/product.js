'use strict';

const Controller = require('egg').Controller;
const Util = require('../utils/param');
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

    /*
    * 增加产品
    *
    * {"name":"1243124","coverImgUrl":"","dayLimitNum":5,"peopleLimitNum":5,"detail":"<p>12313</p>","productType":"4","status":"0","pics":[{"imgUrl":"http://shop-1256826840.pictj.myqcloud.com/test/d2789ac2a541dfd4d587a60fe16a56353d0fbc7534630-OWxii0_fw658.jpg","imgWidth":658,"imgHeight":961,"imgSort":0}],"skuList":[{"barcode":"","marketPrice":0,"price":1,"productId":0,"skuId":0,"skuImg":"http://shop-1256826840.pictj.myqcloud.com/test/9d0ccc1722ba9c9c062e2bce7bd0b4fddccf75e3786ff-WUVwdC_fw658.jpg","skuName":"111","sort":1,"stock":45}],"opType":1}
    *
    *
    * */
    editProduct(){
        const _ctx = this.ctx
        let params = this.ctx.request.query
        console.log('params',params)

        _ctx.body = params;

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
    async queryProductByPage(){
        const _ctx = this.ctx
        let {pageNo,pageSize,name,productId,status} =  Util.get(_ctx)

       let prod =  await _ctx.model.Product.findAndCountAll({
           offset:(pageNo-1)*pageSize,
           limit:pageSize,
           include: { model: this.ctx.model.ProductSpec, as: 'skuList' },})

       let data = {productList:prod.rows,total:prod.count}
       Util.success(_ctx,data)

    }

}

module.exports = ProductController;

