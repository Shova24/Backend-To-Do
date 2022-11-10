import { DataTypes } from "sequelize";
import sequelize from "../config/Database";

const { INTEGER } = DataTypes;

const Role_Children = sequelize.define(
  "to_do_role_children",
  {
    role_child_id: INTEGER,
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);
// Role_Children.belongsTo(Roles, { as: "role_child_id" });
export default Role_Children;
