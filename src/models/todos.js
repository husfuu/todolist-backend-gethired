"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class todos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.todos, {
                foreignKey: "activity_group_id",
            });
        }
    }
    todos.init(
        {
            activity_group_id: DataTypes.INTEGER,
            title: DataTypes.STRING,
            is_active: DataTypes.BOOLEAN,
            priority: DataTypes.STRING,
        },
        {
            sequelize,
            paranoid: true,
            modelName: "todos",
        }
    );
    return todos;
};
