/**
 * @Author: user
 * @Date:2019/2/1
 * @Last Modified time: 2019/2/1
 * @Description: 描述
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */
'use strict';

module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT,BOOLEAN } = app.Sequelize;

    const channel = app.model.define('channel',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 名称
            path:STRING(500), // 路径
            isHome:BOOLEAN, // 是否为主页 true 是 false否
            templates:STRING(8000), // 模板
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return channel;
};
