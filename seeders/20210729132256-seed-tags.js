"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tags", [
      {
        tag_name: "food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "transportation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "entertainment",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "essential",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "clothing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "utility",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "health",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "grocery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "tax",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "emergency",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "monthly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "weekly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "daily",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "special",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tag_name: "others",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
