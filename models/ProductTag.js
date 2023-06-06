// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require("sequelize");
// Import the database connection from the config.js file
const connection = require("../config/connection");

// Create the ProductTag model by extending the Model class provided by Sequelize
class ProductTag extends Model { }

// Set up the fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define columns
    product_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "product_id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "tag_id",
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

// Export ProductTag model
module.exports = ProductTag;
