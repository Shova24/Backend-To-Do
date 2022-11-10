import { DataTypes } from "sequelize";
import sequelize from "../config/Database";
import Users from "./UsersModel";

const { TEXT, STRING, DATEONLY, TIME, BOOLEAN } = DataTypes;

const Tasks = sequelize.define(
  "to_do_tasks",
  {
    taskName: TEXT,
    priority: STRING,
    deadlineDate: DATEONLY,
    deadlineTime: TIME,
    is_deleted: BOOLEAN,
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);

export default Tasks;
