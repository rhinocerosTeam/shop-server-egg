/**
 * Created by songpeilan on 2018/8/16.
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/info', controller.home.info);
};