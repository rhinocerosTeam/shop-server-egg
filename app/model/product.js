'use strict';

module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT,DATE } = app.Sequelize;

    const product = app.model.define('product',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(50), // 姓名
            coverImg:STRING(1000), // 头像
            productDesc:STRING(1000), // 商品描述
            swiper: JSON, // 轮播图 [{imgUrl}]
            status: INTEGER, // 状态 0 默认 -1已下架 1已上架
            sort:INTEGER, // 排序
            createdAt: DATE,
            updatedAt: DATE,
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            //timestamps: false,
        }
    );

    product.associate = function() {
        app.model.Product.hasMany(app.model.ProductSpec, { as: 'skuList' });
    }


    return product;
};
