const { Course, Category } = require("../models");

class UserCourseController {
  static async allCourses(req, res, next) {
    try {
      const courses = await Course.findAll();
      res.status(200).json(courses);
    } catch (err) {
      next(err);
    }
  }
  static async allCategories(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async popularsCategories(req, res, next) {
    try {
      const categories = await Category.findAll({
        order: [["rating", "DESC"]],
        limit: 3,
      });

      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }
  static async detailCourse(req, res, next) {
    try {
      const { id } = req.params;
      const course = await Course.findOne({
        where: {
          id: +id,
        },
        include: Category,
      });

      await Category.update(
        {
          rating: course.Category.rating + 5,
        },
        {
          where: {
            id: course.Category.id,
          },
        }
      );

      res.status(200).json(course);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserCourseController;
