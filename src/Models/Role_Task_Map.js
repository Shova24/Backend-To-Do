import { DataTypes } from "sequelize";
import sequelize from "../config/Database";
import Users from "./UsersModel";

const { STRING } = DataTypes;

const Roles = sequelize.define(
  "ToDo_Roles",
  {
    role: STRING,
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);

export default Roles;
