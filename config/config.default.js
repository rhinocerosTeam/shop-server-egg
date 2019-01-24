'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1541683250311_5398';

    // add your config here
    config.middleware = [];
    config.sequelize = {
        dialect: 'mysql',
        host: 'www.bangjism.cn',
        port: 3306,
        database: 'testshop',
        username: 'root',
        password: 'lan5201314',
        define: {
            underscored: false, //
        },
    }
    config.jwt = {
        secret: "egg-jwt-spl"
    }
    // config.security = {
    //     csrf: {
    //         enable: false
    //     },
    //     domainWhiteList: '*'
    // };
    config.cors = {
        origin:'*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    config.cos = {
        host:'https://product-1256826840.cos.ap-beijing.myqcloud.com',
        SecretId: "AKIDvnV3QcPWCnFXfcMzPeonbEgy51pS7xTo",
        SecretKey: "UpydDdsNn26LUUJ5h8wRp1LZdJzVuCJF"
    };
    config.oss = {
        host:'https://product-1256826840.cos.ap-beijing.myqcloud.com',
        SecretId: "AKIDvnV3QcPWCnFXfcMzPeonbEgy51pS7xTo",
        SecretKey: "UpydDdsNn26LUUJ5h8wRp1LZdJzVuCJF"
    };
    // node.js 性能平台
    exports.alinode = {
        // 从 `Node.js 性能平台` 获取对应的接入参数
        appid: '77521',
        secret: 'd3b8880888d0a9a25c5142ee5b3041cab2e0b939',
    };

    return config;
};
