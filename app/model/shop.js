/**
 * @Author: user
 * @Date:2018/11/14
 * @Last Modified time: 2018/11/14
 * @Description: 描述
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */
'use strict';

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;

    const shop = app.model.define('shop',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            shopName: STRING(50), // 店铺名称
            shopLogo:STRING(500), // 商铺logo
            phone:STRING(500), // 电话号码
            password:STRING(40), // 密码
            token:STRING(500), // token
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return shop;
};
