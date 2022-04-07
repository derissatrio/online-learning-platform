"use strict";
const fs = require("fs");
const { hashPasword } = require("../helper/bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./db/users.json", "utf-8"));
    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      el.password = hashPasword(el.password);
    });
    await queryInterface.bulkInsert("Users", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {
      restartIdentity: true,
    });
  },
};
