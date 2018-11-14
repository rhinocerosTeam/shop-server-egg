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
    database: 'testshop',
    username: 'root',
    password: '@pwd=123456',
    define: {
        underscored: false, //
    },
  }
  config.jwt={
      secret: "egg-jwt-spl"
  }

  return config;
};
