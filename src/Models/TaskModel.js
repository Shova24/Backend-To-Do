import { DataTypes } from "sequelize";
import sequelize from "../config/Database";
import Users from "./UsersModel";

const { TEXT, STRING, DATEONLY, TIME, BOOLEAN, INTEGER } = DataTypes;

const Tasks = sequelize.define(
  "to_do_tasks",
  {
    user_id: INTEGER,
    task_name: TEXT,
    priority: STRING,
    deadline_date: DATEONLY,
    deadline_time: TIME,
    is_deleted: BOOLEAN,
  },
  {
    timestamps: false,
    schema: "ecrm_learning",
  }
);

export default Tasks;
