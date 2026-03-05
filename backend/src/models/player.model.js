import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const model = {
  pseudo: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

const Player = sequelize.define("Player", model, {
  tableName: "players",
  timestamps: true,
});

export default Player;
