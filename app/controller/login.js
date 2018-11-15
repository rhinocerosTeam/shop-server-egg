'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async pwdLogin() {
        const _ctx = this.ctx

        let data = this.ctx.request.query.data
        data = JSON.parse(data)
        let {phone,password} = data
        let shopUser = await _ctx.model.Shop.findOne({where:{phone:phone,password:password}})
        if(shopUser){
            let {id,shopName,shopLogo} = shopUser
            let token = this.app.jwt.sign({ consume:shopUser.id }, this.app.config.jwt.secret);

            await _ctx.model.Shop.update({token:token},{where:{id:shopUser.id}})

            this.ctx.body = {code:1000,data:{consume:id,shopName,shopLogo,token},msg:''};
        }else{
            this.ctx.body = {code:4050,data:null,msg:'手机验证码登录失败'};
        }
    }
}

module.exports = LoginController;