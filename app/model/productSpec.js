'use strict';
/*商品属性*/
module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT } = app.Sequelize;

    const product = app.model.define('productSpec',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 姓名
            coverImg:STRING(1000), // 头像
            price:FLOAT , // 价格
            oldPrice:FLOAT , // 原价格
            stockIn:INTEGER, // 入库数量
            stockOut:INTEGER, // 出库数量
            stockNum:INTEGER, // 现存的库存数
            status:INTEGER
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return product;
};
