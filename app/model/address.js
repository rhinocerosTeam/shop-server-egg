/**
 * @Author: user
 * @Date:2018/11/12
 * @Last Modified time: 2018/11/12
 * @Description: 描述
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */
'use strict';

module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT } = app.Sequelize;

    const Address = app.model.define('address',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 姓名
            phone:STRING(1000), // 头像
            country:STRING(50), // 国家
            city:STRING(500), // 城市
            prefecture:STRING(50), // 地区 ， 县城
            detail:STRING(1000), // 详细地址
            status:INTEGER, // 状态 1 默认选中 0 默认未选中
            usersId:INTEGER, // 用户id
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return Address;
};
