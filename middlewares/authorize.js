function authorize(req, res, next) {
  try {
    const { token } = req.headers;
    const { role } = req.userLogin;
    if (!token) {
      throw {
        code: 401,
        name: "Login not yet",
        message: "let Sign in first",
      };
    }

    if (role !== "admin") {
      throw {
        message: "Sorry you are not an Admin",
        code: 401,
        name: "Unauthorized",
      };
    }

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authorize;
