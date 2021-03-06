'use strict';

const Controller = require('egg').Controller;
const Util = require('../utils/param');

class HomeController extends Controller {
    /**
     * 编辑和增加渠道
     * */
    async edit() {
        let params = Util.get(this.ctx)
        if(params.id){
            await _ctx.model.Channel.update(params,{where: {id: params.id}})
        }else{
            await _ctx.model.Channel.create(params)
        }
        Util.success(_ctx)
    }
    /**
     * 删除
     * @param id id
     * */
    async delete() {
        const _ctx = this.ctx
        let {id} =  Util.get(_ctx)
        await _ctx.model.Channel.destroy({where: {id: id}})


        Util.success(_ctx)
    }
    /**
     * 分页查找
     * @param pageNo 当前页数
     * @param pageSize 每页的个数
     * */
    async queryListByPage() {
        const _ctx = this.ctx
        let {pageNo, pageSize} =  Util.get(_ctx)
        let prod = await _ctx.model.Channel.findAndCountAll({
                offset: (pageNo - 1) * pageSize,
                limit: pageSize,
            }
        )

        let data = {list: prod.rows, total: prod.count}
        Util.success(_ctx, data)
    }
}

module.exports = HomeController;
