const AdminCourseController = require("../controllers/admin-course");
const CourseController = require("../controllers/admin-course");
const AdminController = require("../controllers/admin-login-register");
const authentication = require("../middlewares/authentication");
const authorize = require("../middlewares/authorize");
const router = require("express").Router();

router.post("/register", AdminController.register);
router.post("/login", AdminController.login);

router.use(authentication, authorize);

router.delete("/users/:id", AdminController.removeUser);
router.get("/statistic", AdminCourseController.courseStatistic);
router.get("/courses", AdminCourseController.allCourses);
router.post("/courses", AdminCourseController.addCourse);
router.get("/courses/:id", AdminCourseController.courseById);
router.put("/courses/:id", AdminCourseController.editCourse);
router.delete("/courses/:id", AdminCourseController.removeCourse);

module.exports = router;
