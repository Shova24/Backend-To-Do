import Task from "../Models/TaskModel";

export const createTask = async (req, res) => {
  try {
    res.status(201).json("Create Task");
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
