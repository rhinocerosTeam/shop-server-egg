/**
 * Created by songpeilan on 2018/11/30.
 */
'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1541683250311_5398';

    // add your config here
    config.middleware = [];
    config.sequelize = {
        dialect: 'mysql',
        host: 'songpeilan.cn',
        port: 3306,
        database: 'shop',
        username: 'root',
        password: '@pwd=123456',
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
    // node.js 性能平台
    exports.alinode = {
        // 从 `Node.js 性能平台` 获取对应的接入参数
        appid: '77520',
        secret: '8342ac00fd95e6346537bec632febb44dfa03826',
    };
    return config;
};
