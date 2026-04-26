const sequelize = require("../config/db");

// Import ALL models here
const User = require("./User");
const Task = require("./Task");

//  Associations (IMPORTANT)
User.hasMany(Task, { foreignKey: "UserId" });
Task.belongsTo(User, { foreignKey: "UserId" });

module.exports = {
  sequelize,
  User,
  Task,
};