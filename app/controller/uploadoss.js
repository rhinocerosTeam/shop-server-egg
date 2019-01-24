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
        const config = {
            dirPath: '*', // 存放到哪个目录下
            bucket: 'bangjism-test.oss-cn-beijing.aliyuncs.com',
            region: 'oss-cn-beijing',// 我的是 hangzhou
            accessKeyId: 'LTAIeQ5vvIPOZGOb',
            accessKeySecret: 'E7gwx4idqAMW5aRbZrk1ZammcFYhCE',
            expAfter: 300000, // 签名失效时间，毫秒
            maxSize: 1048576000 // 文件最大的 size
        }

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
            'success_action_status': 201,
            'dirPath': config.dirPath,
        })

    }
}
module.exports = UploadossController;