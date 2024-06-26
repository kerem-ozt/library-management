'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.hasMany(models.Ratings, {
        foreignKey: 'book_id'
      });
      Books.hasMany(models.Borrows, {
        foreignKey: 'book_id'
      });
    }
  }
  Books.init({
    name: DataTypes.STRING,
    average_rating: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};