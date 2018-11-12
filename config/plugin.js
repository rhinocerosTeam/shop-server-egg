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