import { DataTypes } from "sequelize";
import sequelize from "../config/Database";
import Role_Children from "./Role_Children";
import Users from "./UsersModel";

const { STRING } = DataTypes;

const Roles = sequelize.define(
  "to_do_roles",
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
// Roles.hasMany(Users);
// Users.belongsTo(Roles, { as: "role_id" });

export default Roles;
