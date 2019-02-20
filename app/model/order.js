/**
 * Created by songpeilan on 2018/11/9.
 */
'use strict';

module.exports = app => {
    const { STRING, INTEGER ,JSON ,FLOAT } = app.Sequelize;

    const order = app.model.define('order',
        {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            flowNumber:STRING, // 流水号
            product:JSON, // 商品信息
            amount:FLOAT , // 总价
            discount:FLOAT, // 优惠金额总价
            address:JSON, // 收货人信息
            createdatetime:STRING, // 创建时间
            deliveryTime:STRING,// 送货时间
            paytime:STRING,// 发货时间
            deliveryType:INTEGER, // 送货类型 0 物流 1送货
            logisticsCompany:STRING,// 物流公司
            logisticsNumber:STRING,// 物流编号
            usersId:INTEGER, // 用户id
        },
        {
            freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,
        }
    );

    return order;
};
