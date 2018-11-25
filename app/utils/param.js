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

export default {

    get(ctx){
        let data = ctx.request.query || ctx.request.body

        if(data && data.data){
            return JSON.parse(data.data)
        }

        return {}
    }

}