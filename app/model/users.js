'use strict';

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const Users = app.model.define('users',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50),
            password: STRING(40)
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return Users;
};
