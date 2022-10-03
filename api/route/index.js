module.exports = function (app) {
    const controller = require('../controller/index')
    app.route('/item/')
        .post(controller.readfile)
        .get(controller.getFile)
    app.route('/item/:id/')
        .delete(controller.deleteStudent)
        .put(controller.updateStudent)
    app.route('/item/add/')
        .post(controller.addStudent)

}