// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require("sequelize");
// Import the database connection from the config.js file
const connection = require("../config/connection.js");

// Create the Tag model by extending the Model class provided by Sequelize
class Tag extends Model { }

// Set up the fields and rules for the Tag model
Tag.init(
  {
    // Define columns
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

// Export the Tag model
module.exports = Tag;






