'use strict';

module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT } = app.Sequelize;

    const product = app.model.define('product',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 姓名
            coverImg:STRING(1000), // 头像
            productDesc:STRING(1000), // 商品描述
            swiper: JSON, // 轮播图 [{imgUrl}]
            price:FLOAT , // 价格
            oldPrice:FLOAT , // 原价格
            stockIn:INTEGER, // 入库数量
            stockOut:INTEGER, // 出库数量
            stockNum:INTEGER, // 现存的库存数
            status:INTEGER, // 状态 0 默认 -1已下架 1已上架
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    product.associate = function() {
        app.model.Product.hasMany(app.model.ProductSpec, { as: 'specs' });
    }


    return product;
};
