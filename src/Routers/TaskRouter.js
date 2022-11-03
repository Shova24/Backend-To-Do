import Router from "express";
import { createTask, deleteTask, getTasks, redoTask, updateInTrash, updateTask } from "../Controllers/TaskController";
const router = Router();

router.post("/post-task", createTask);
router.get("/get-tasks", getTasks);
router.patch("/update-task/:id", updateTask);
router.patch("/update-in-trash/:id", updateInTrash);
router.patch("/redo-task/:id", redoTask);
router.delete("/delete-task/:id", deleteTask);

export default router;
