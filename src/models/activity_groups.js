"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity_Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Activity_Groups.init(
    {
      email: DataTypes.STRING,
      title: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Activity_Groups"
    }
  );
  return Activity_Groups;
};
