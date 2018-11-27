/**
 * @Author: user
 * @Date:2018/11/12
 * @Last Modified time: 2018/11/12
 * @Description: 管理后台接口路由
 * @Query: 页面参数
 * @Props: 组件参数
 * @Remark:
 - 备注一
 */

module.exports = app => {
    const { controller, router  } = app;
    // prefix
    router.group({ prefix: '/web' }, router => {
        // router-name: test, router-path: /pre/test2
        router.get('/', controller.home.index);

        router.get('/pwdLogin', controller.login.pwdLogin);

        router.get('/users', controller.users.index);

        router.get('/addProduct', controller.product.editProduct);
        router.get('/getProductList', controller.product.queryProductByPage);



    });
};