const UserCourseController = require("../controllers/user-course");
const UserController = require("../controllers/user-login-register");
const router = require("express").Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/courses", UserCourseController.allCourses);
router.get("/courses/:id", UserCourseController.detailCourse);
router.get("/categories", UserCourseController.allCategories);
router.get("/categories-populars", UserCourseController.popularsCategories);

module.exports = router;
