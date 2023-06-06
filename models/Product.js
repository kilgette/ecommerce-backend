// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require("sequelize");
// Import the database connection from the config.js file
const connection = require("../config/connection.js");

// Create the Product model by extending the Model class provided by Sequelize
class Product extends Model { }

// Set up the fields and rules for the Product model
Product.init(
  {
    // Define columns
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

// Export the Product model
module.exports = Product;