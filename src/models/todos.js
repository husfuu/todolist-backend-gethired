"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todos.init(
    {
      activity_group_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      is_active: DataTypes.STRING,
      priority: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Todos"
    }
  );
  return Todos;
};
