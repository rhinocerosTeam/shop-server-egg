'use strict';

// had enabled by egg
// exports.static = true;
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
exports.routerGroup = {
    enable: true,
    package: 'egg-router-group',
};
exports.jwt = { // token
    enable: true,
    package: "egg-jwt"
};
exports.cors = { // 跨域问题
    enable: true,
    package: 'egg-cors',
};
