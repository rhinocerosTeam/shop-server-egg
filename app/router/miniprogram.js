/**
 * @Author: user
 * @Date:2018/11/12
 * @Last Modified time: 2018/11/12
 * @Description: 微信小程序接口
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */

module.exports = app => {
    const { controller, router } = app;
    // prefix
    router.group({ prefix: '/mini' }, router => {
        // router-name: test, router-path: /pre/test2
        router.get('/', controller.home.index);
        router.get('/users', controller.users.index);
        router.get('/products', controller.product.index);
    });
};