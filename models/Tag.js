const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection.js");

// Create the Tag model by extending the Model class 
class Tag extends Model { }

// Set up the fields and rules for the Tag model
Tag.init(
  {
   
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


module.exports = Tag;






