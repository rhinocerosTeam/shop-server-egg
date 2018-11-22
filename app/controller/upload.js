'use strict';

const Controller = require('egg').Controller;
var bodyParser = require('body-parser');

var COS = require('cos-nodejs-sdk-v5');

var getTempKeys = require( '../utils/sts-auth')


// var cos = new COS({
//     SecretId: "AKIDvnV3QcPWCnFXfcMzPeonbEgy51pS7xTo",
//     SecretKey: "UpydDdsNn26LUUJ5h8wRp1LZdJzVuCJF"
// });




class UploadController extends Controller {
    // async uploadFile() {
    //     const _ctx = this.ctx
    //
    //     cos.sliceUploadFile({
    //         Bucket: 'product-1256826840',
    //         Region: 'ap-beijing',
    //         Key: 'friendShare.png',
    //         FilePath: './friendShare.png'
    //     }, function (err, data) {
    //         console.log(err, data);
    //     });
    //
    //
    //     _ctx.body = '上传成功';
    // }

    async getTempKeys(){

        const _ctx = this.ctx
        var pathname = _ctx.request.body.pathname || _ctx.request.query.pathname || '';
        var Key = pathname.substr(0, 1) === '/' ? pathname.substr(1) : pathname;
        var req = _ctx.request
        getTempKeys(function (err, tempKeys) {
            var err = null;
            var data;
            if (err) {
                data = err;
            } else {


                var opt = {
                    SecretId: tempKeys.credentials.tmpSecretId,
                    SecretKey: tempKeys.credentials.tmpSecretKey,
                    Method: req.body.method || req.query.method,
                    Key: Key,
                    Query: req.body.query || req.query.query || {},
                    Headers: req.body.headers || req.query.headers || {},
                };
                data = {
                    Authorization: COS.getAuthorization(opt),
                    XCosSecurityToken: tempKeys['credentials'] && tempKeys['credentials']['sessionToken'],
                };
            }

            _ctx.body = err || data;
        });




    }


}

module.exports = UploadController;

