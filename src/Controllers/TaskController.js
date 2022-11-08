import jwt from "jsonwebtoken";
import Tasks from "../Models/TaskModel";

export const createTask = async (req, res) => {
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

    const { taskName, priority, deadlineTime, deadlineDate } = req.body;
    const newTask = { taskName, priority, deadlineDate, deadlineTime, is_deleted: false, ToDoUserId: decodeToken.id };
    // console.log("====================================");
    // console.log(newTask);
    // console.log("====================================");

    await Tasks.create(newTask);
    const task = await Tasks.findAll({ raw: true });
    res.status(201).json(task);
  } catch (error) {
    res.status(404).json("Task Created Failed : " + error.message);
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll({ raw: true });
    res.status(201).json({ message: tasks });
  } catch (error) {
    res.status(404).json({ message: "Get Task Failed : " + error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { taskName, priority } = req.body;
    await Tasks.update({ taskName, priority }, { where: { id: taskId } });
    const task = await Tasks.findOne({ where: { id: taskId }, raw: true });
    const tasks = await Tasks.findAll({ where: { is_deleted: false }, raw: true });

    res.status(200).json({ message: task });
  } catch (error) {
    res.status(404).json(err.message);
  }
};
export const deleteToTrash = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Tasks.update({ is_deleted: "True" }, { where: { id: taskId } });
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    const err = new Error("Task not Deleted");
    res.status(404).json(error.message);
  }
};
export const redoTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Tasks.findOne({ where: { id: taskId } });
    if (task) {
      await Tasks.update({ is_deleted: "FALSE" }, { where: { id: taskId } });
      res.status(200).json({ message: "Task Restored!" });
    } else {
      res.status(200).json({ message: "Task not found." });
    }
  } catch (error) {
    const err = new Error("redoTask failed");
    res.status(404).json(err.message);
  }
};
export const deleteTask = async (req, res) => {
  try {
    await Tasks.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Delete Task Permanently" });
  } catch (error) {
    const err = new Error("Task not Deleted Permanently");
    res.status(404).json(error.message);
  }
};
