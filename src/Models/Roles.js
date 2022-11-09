import { DataTypes } from "sequelize";
import sequelize from "../config/Database";
import Users from "./UsersModel";

const { STRING } = DataTypes;

const Roles = sequelize.define(
  "ToDo_Roles",
  {
    role: {
      type: STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: "Role already exist in DB!",
      },
    },
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);

export default Roles;
