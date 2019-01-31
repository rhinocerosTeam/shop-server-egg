/**
 * @Author: user
 * @Date:2019/1/24
 * @Last Modified time: 2019/1/24
 * @Description: 描述
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */
'use strict';

const Controller = require('egg').Controller;
const Util = require('../utils/param');
const crypto = require('crypto');




class UploadossController extends Controller {
    getOssToken(){
        const _ctx = this.ctx
        const ossConfigCtx = _ctx.app.config.oss

        const config = {
            dirPath: ossConfigCtx.dirPath, // 存放到哪个目录下
            bucket: ossConfigCtx.bucket,
            region: ossConfigCtx.region,//
            accessKeyId: ossConfigCtx.accessKeyId,
            accessKeySecret: ossConfigCtx.accessKeySecret,
            expAfter: ossConfigCtx.expAfter, // 签名失效时间，毫秒
            maxSize: ossConfigCtx.maxSize // 文件最大的 size
        }
        console.log({config})

        const host = `https://${config.bucket}.${config.region}.aliyuncs.com`
        const expireTime = new Date().getTime() + config.expAfter
        const expiration = new Date(expireTime).toISOString()
        const policyString = JSON.stringify({
            expiration,
            conditions: [
                ['content-length-range', 0, config.maxSize],
                ['starts-with', '$key', config.dirPath]
            ]
        })
        const policy = Buffer.from(policyString).toString('base64')

        const signature = crypto.createHmac('sha1', config.accessKeySecret).update(policy).digest("base64")

        Util.success(_ctx,{
            signature,
            policy,
            host,
            'OSSAccessKeyId': config.accessKeyId,
            'key': expireTime,
            'success_action_status': 200,
            'dirPath': config.dirPath,
        })

    }
}
module.exports = UploadossController;