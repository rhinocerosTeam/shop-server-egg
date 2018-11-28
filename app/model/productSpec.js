'use strict';
/*商品属性*/
module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT } = app.Sequelize;

    const productSpec = app.model.define('productSpec',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 姓名
            coverImg:STRING(1000), // 展示图
            barcode:STRING(100), // UPC码
            price:FLOAT , // 销售价格
            marketPrice:FLOAT , // 市场价格
            stockOut:INTEGER, // 出库数量 售出数量
            stockNum:INTEGER, // 现存的库存数
            returnNum:INTEGER, // 退货数量
            sort:INTEGER, // 排序
            productId:INTEGER, // 产品id
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return productSpec;
};
