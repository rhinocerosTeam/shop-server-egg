'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async pwdLogin() {
        const _ctx = this.ctx
        let {phone,password} = this.ctx.request.query
        console.log('model-->',_ctx.model.Shop)
        let shopUser = await _ctx.model.Shop.findOne({where:{phone,password}})
        let {id,shopName,shopLogo} = shopUser
        if(shopUser.id){
            let token = this.app.jwt.sign({ consume:shopUser.id }, this.app.config.jwt.secret);

            await _ctx.model.Shop.update({token:token},{where:{id:shopUser.id}})

            this.ctx.body = {code:1000,data:{id,shopName,shopLogo,token},msg:''};
        }else{
            this.ctx.body = {code:2000,data:null,msg:'手机验证码登录失败'};
        }
    }
}

module.exports = LoginController;