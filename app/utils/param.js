/**
 * @Author: user
 * @Date:2018/11/23
 * @Last Modified time: 2018/11/23
 * @Description: 描述
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */

module.exports = {


    get(ctx){
        let data = ctx.request.query || ctx.request.body

        if(data && data.data){
            return JSON.parse(data.data)
        }

        return {}
    },
    success(ctx,data){
        ctx.body={code:1000,data:data,msg:""}
    },
    fail(ctx,msg){
        ctx.body={code:1000,data:null,msg}
    }

}