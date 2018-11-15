'use strict';

const Controller = require('egg').Controller;

var COS = require('cos-nodejs-sdk-v5');
var cos = new COS({
    SecretId: "AKIDvnV3QcPWCnFXfcMzPeonbEgy51pS7xTo",
    SecretKey: "UpydDdsNn26LUUJ5h8wRp1LZdJzVuCJF"
});
class UploadController extends Controller {
    async uploadFile() {
        const _ctx = this.ctx

        cos.sliceUploadFile({
            Bucket: 'product-1256826840',
            Region: 'ap-beijing',
            Key: 'friendShare.png',
            FilePath: './friendShare.png'
        }, function (err, data) {
            console.log(err, data);
        });


        _ctx.body = '上传成功';
    }
}

module.exports = UploadController;

