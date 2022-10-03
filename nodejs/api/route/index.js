
module.exports = function (app) {
    const studentController = require('../controller/index')
    const verify=require('../verify/verify')
    app.route('/student')   
        .get( verify.verify,  studentController.getStudent)
        .post(verify.verify , verify.isAdmin,studentController.addStudent)
    app.route('/student/:id')
        .delete(verify.verify , verify.isAdmin, studentController.deleteStudent)
        .put(verify.verify , verify.isAdmin, studentController.updateStudent)
    app.route('/student/search')
        .get(verify.verify,studentController.searchStudent)
    app.route('/student/signup/')
        .post(studentController.signUp)
    app.route('/student/login/')
        .post(studentController.login)
}