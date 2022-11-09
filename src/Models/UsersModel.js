import { DataTypes } from "sequelize";
import Tasks from "./TaskModel";
import sequelize from "../config/Database";
import Roles from "./Roles";

const { STRING } = DataTypes;

const Users = sequelize.define(
  "ToDo_Users",
  {
    username: {
      type: STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: "Username already in use!",
      },
    },
    email: {
      type: STRING,
      allowNull: true,
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
    },
    password: {
      type: STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);

Users.hasMany(Tasks);
export default Users;
