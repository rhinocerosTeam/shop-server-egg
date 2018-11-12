'use strict';

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const users = app.model.define('users',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 姓名
            headImg:STRING(500), // 头像
            password: STRING(40), // 电话
            openid:STRING(100), // openid
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return users;
};
