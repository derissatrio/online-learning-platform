const { Course, User } = require("../models");

class AdminCourseController {
  static async allCourses(req, res, next) {
    try {
      const courses = await Course.findAll();
      res.status(200).json(courses);
    } catch (err) {
      next(err);
    }
  }
  static async courseById(req, res, next) {
    try {
      const { id } = req.params;
      const course = await Course.findByPk(+id);

      if (!course) {
        throw {
          code: 404,
          name: "NOT FOUND",
          message: "Course not found!",
        };
      }

      res.status(200).json(course);
    } catch (err) {
      next(err);
    }
  }
  static async addCourse(req, res, next) {
    try {
      const { UserId } = req.userLogin;
      let { name, price, photoUrl, CategoryId } = req.body;

      if (price === "free") {
        price = 0;
      }
      const course = await Course.create({
        name,
        price: +price,
        photoUrl,
        CategoryId: +CategoryId,
        UserId,
      });
      res.status(201).json({
        message: "New course has added!",
        course,
      });
    } catch (err) {
      next(err);
    }
  }
  static async editCourse(req, res, next) {
    try {
      const { id } = req.params;
      const { name, price, photoUrl, CategoryId } = req.body;

      const course = await Course.findByPk(+id);

      if (!course) {
        throw {
          code: 404,
          name: "NOT FOUND",
          message: "Course not found!",
        };
      }

      await Course.update(
        {
          name,
          price: +price,
          photoUrl,
          CategoryId: +CategoryId,
        },
        {
          where: {
            id: +id,
          },
        }
      );
      res.status(200).json({
        message: "Course has been edited!",
      });
    } catch (err) {
      next(err);
    }
  }
  static async removeCourse(req, res, next) {
    try {
      const { id } = req.params;
      const course = await Course.findByPk(+id);

      if (!course) {
        throw {
          code: 404,
          name: "NOT FOUND",
          message: "Course not found!",
        };
      }

      await Course.destroy({
        where: {
          id: +id,
        },
      });
      res.status(200).json({
        message: "Course has been deleted!",
      });
    } catch (err) {
      next(err);
    }
  }
  static async courseStatistic(req, res, next) {
    try {
      const users = await User.findAll({
        where: {
          status: "active",
          role: "user",
        },
      });

      const courses = await Course.findAll();

      const freeCourses = courses.filter((el) => el.price === 0);

      res.status(200).json({
        totalUser: users.length,
        totalCourses: courses.length,
        freeCourses: freeCourses.length,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminCourseController;
