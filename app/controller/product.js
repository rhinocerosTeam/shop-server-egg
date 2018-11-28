'use strict';

const Controller = require('egg').Controller;
const Util = require('../utils/param');

class ProductController extends Controller {

    async index() {
        const _ctx = this.ctx
        const products = await _ctx.model.Product.findAll({
            include: {model: this.ctx.model.ProductSpec, as: 'skuList'},
        })
        _ctx.body = products;
    }


    // mini_queryProductById(){
    //
    // }
    /**
     * 编辑商品
     * **/
    async editProduct() {
        const _ctx = this.ctx
        let Op = this.app.Sequelize.Op
        // 封装参数

        let params = Util.get(this.ctx)

        let specList = params.skuList

        delete params.skuList
        let product = params


        if(product.id){
            await _ctx.model.Product.update(product,{where: {id: product.id}})
        }else{
            await _ctx.model.Product.create(product)
        }


        // 编辑/增加/删除 规格
        let specids = await this.productSpec(specList,product)

        await _ctx.model.ProductSpec.destroy({where:{id:{[Op.notIn]:specids},productId:product.id}})


        Util.success(_ctx)

    }

    async productSpec(specList,product){
        const _ctx = this.ctx
        let specids=[]
        return new Promise((resolve,reject)=>{
            specList.map(async(obj,index) => {
                obj.productId = product.id
                if(obj.id){
                    await _ctx.model.ProductSpec.update(obj,{where: {id: obj.id}})
                    specids.push(obj.id)

                }else{
                    await _ctx.model.ProductSpec.create(obj)
                }

                if(index == specList.length-1 ){
                    resolve(specids)
                }
            })
        })
    }


    /*
     * 删除产品
     * */
    async deleteProduct() {
        const _ctx = this.ctx
        let {productId} =  Util.get(_ctx)
        await _ctx.model.Product.destroy({where: {id: productId}})

        await _ctx.model.ProductSpec.destroy({where: {productId: productId}})

        Util.success(_ctx)

    }

    /*
     * 根据id查询产品和产品规格
     * */
    async getProductDetail() {
        const _ctx = this.ctx
        let {productId} =  Util.get(_ctx)

        let product = await _ctx.model.Product.findOne({
            where: {id: productId},
            include: {model: this.ctx.model.ProductSpec, as: 'skuList'}
        })



        product.swiper = JSON.parse(product.swiper)
        Util.success(_ctx, product)
    }

    /*
     * 分页查询产品
     * 1.按照 pageNo, pageSize, name, status 查询
     * 2.与规格联合查询
     * 3.以分组排序
     * */
    async queryProductByPage() {
        const _ctx = this.ctx
        let {pageNo, pageSize, name, status} =  Util.get(_ctx)
        let Op = this.app.Sequelize.Op;

        let whereCondition = {}

        if (name) whereCondition["name"] = {[Op.like]: '%' + name + '%'}
        if (status) whereCondition["status"] = status


        let prod = await _ctx.model.Product.findAndCountAll({
                offset: (pageNo - 1) * pageSize,
                limit: pageSize,
                where: whereCondition,
                order: [['sort', 'DESC']],
                include: {model: this.ctx.model.ProductSpec, as: 'skuList'}
            }
        )

        let data = {productList: prod.rows, total: prod.count}
        Util.success(_ctx, data)

    }

    /**
     * 上架或下架商品
     * **/
    async shelfProduct() {
        const _ctx = this.ctx
        let {productId, status} =  Util.get(_ctx)
        let add = await _ctx.model.Product.update({status}, {where: {id: productId}})

        Util.success(_ctx)

    }

    /**
     * 商品排序
     * **/
    async sortProduct() {
        const _ctx = this.ctx
        let {productId, sort} =  Util.get(_ctx)

        let sortO = await _ctx.model.Product.update({sort}, {where: {id: productId}})

        Util.success(_ctx)

    }


}

module.exports = ProductController;

