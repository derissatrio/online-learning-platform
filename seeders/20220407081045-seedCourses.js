"use strict";
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./db/courses.json", "utf-8"));
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Courses", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Courses", null, {
      restartIdentity: true,
    });
  },
};
