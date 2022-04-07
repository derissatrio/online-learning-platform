const { checkPassword } = require("../helper/bcrypt");
const { convertToToken } = require("../helper/jwt");
const { User } = require("../models");

class AdminController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw {
          code: 400,
          name: "Bad Request",
          message: "Invalid email or password",
        };
      }

      const isValid = checkPassword(password, user.password);

      if (!isValid) {
        throw {
          code: 400,
          name: "Bad Request",
          message: "Invalid email or password",
        };
      }

      const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
      };
      const token = convertToToken(payload);
      res.status(200).json({
        access_token: token,
        name: user.name,
        role: user.role,
      });
    } catch (err) {
      next(err);
    }
  }
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.create({
        email,
        password,
        role: "admin",
        status: "active",
      });

      res.json(user);
    } catch (err) {
      next(err);
    }
  }
  static async removeUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(+id);

      if (!user || user.status === "deleted") {
        throw {
          message: "User not found!",
          code: 404,
          name: "NOT FOUND",
        };
      }

      console.log(user);

      await User.update(
        {
          status: "deleted",
          email: `${user.email}_DELETED`,
        },
        {
          where: {
            id: +id,
          },
        }
      );

      res.status(200).json({
        message: "User has been deleted!",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminController;
