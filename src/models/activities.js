"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class activities extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.todos, {
                foreignKey: "activity_group_id",
            });
        }
    }
    activities.init(
        {
            email: DataTypes.STRING,
            title: DataTypes.STRING,
        },
        {
            sequelize,
            paranoid: true,
            modelName: "activities",
        }
    );
    return activities;
};
