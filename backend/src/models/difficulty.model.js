import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const model = {
    label : {
        type: DataTypes.STRING(10),
        allowNull:false,
        unique:true,
    },
    time_per_question_sec : {
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true,
    }
};

const Difficulty = sequelize.define("Difficulty", model,{
    tableName: "difficulties",
    timestamps:true,
});

export default Difficulty