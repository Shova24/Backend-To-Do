import Task from "../Models/TaskModel";
import jwt from "jsonwebtoken";
import Tasks from "../Models/TaskModel";
export const createTask = async (req, res) => {
  // let decodeToken = jwt.verify(token, "jwt-secret");
  // console.log(decodeToken);
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const error = new Error("Not Authenticated!");
      return next(error.message);
    }
    const token = authHeader.split(" ")[1];
    let decodeToken;
    try {
      decodeToken = jwt.verify(token, "jwt-secret");
    } catch (error) {
      if (error.message === "jwt expired") {
        error.message = "Session Expired";
      }
    }
    if (!decodeToken) {
      const error = new Error("Not Authorized!");
      return next(error.message);
    }

    const { taskName, priority, is_deleted } = req.body;
    const newTask = { taskName, priority, is_deleted, ToDoUserId: decodeToken.id };
    console.log("====================================");
    console.log("newTask: ", newTask);
    console.log("====================================");
    await Tasks.create(newTask);
    const task = await Tasks.findAll({ raw: true });
    res.status(201).json(task);
  } catch (error) {
    const err = new Error("Task not created");
    res.status(404).json(err.message);
  }
};
export const getTasks = async (req, res) => {
  try {
    res.status(201).json("Tasklist get");
  } catch (error) {
    const err = new Error("Get Task Not executed");
    res.status(404).json(err.message);
  }
};
export const updateTask = async (req, res) => {
  try {
    res.status(200).json("Update Task");
  } catch (error) {
    const err = new Error("Task not updated");
    res.status(404).json(err.message);
  }
};
export const updateInTrash = async (req, res) => {
  try {
    res.status(200).json("Delete Task");
  } catch (error) {
    const err = new Error("Task not Deleted");
    res.status(404).json(err.message);
  }
};
export const redoTask = async (req, res) => {
  try {
    res.status(200).json("Redo Task");
  } catch (error) {
    const err = new Error("redoTask failed");
    res.status(404).json(err.message);
  }
};
export const deleteTask = async (req, res) => {
  try {
    res.status(200).json("Delete Task Permanently");
  } catch (error) {
    const err = new Error("Task not Deleted Permanently");
    res.status(404).json(err.message);
  }
};
