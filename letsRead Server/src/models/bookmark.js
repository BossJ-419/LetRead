'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User)
Bookmark.belongsTo(models.Book)
    }
  }
  Bookmark.init({
    status: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};