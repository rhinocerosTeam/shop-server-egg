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
    // 本地的
    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: 'shop',
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
    config.oss = {
        dirPath: '', // 存放到哪个目录下
        bucket: 'bangjism',
        region: 'oss-cn-beijing',//
        accessKeyId: 'LTAIeQ5vvIPOZGOb',
        accessKeySecret: 'E7gwx4idqAMW5aRbZrk1ZammcFYhCE',
        expAfter: 300000, // 签名失效时间，毫秒
        maxSize: 1048576000 // 文件最大的 size
    };
    // node.js 性能平台
    exports.alinode = {
        // 从 `Node.js 性能平台` 获取对应的接入参数
        appid: '77520',
        secret: '8342ac00fd95e6346537bec632febb44dfa03826',
    };
    return config;
};
