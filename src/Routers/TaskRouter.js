import Router from "express";
import { createTask, deleteTask, getTasks, redoTask, updateInTrash, updateTask } from "../Controllers/TaskController";
import { AuthorizedUser } from "../middlewares/UserAuth";
const router = Router();

router.post("/post-task", AuthorizedUser, createTask);
router.get("/get-tasks", AuthorizedUser, getTasks);
router.patch("/update-task/:id", AuthorizedUser, updateTask);
router.patch("/update-in-trash/:id", AuthorizedUser, updateInTrash);
router.patch("/redo-task/:id", AuthorizedUser, redoTask);
router.delete("/delete-task/:id", AuthorizedUser, deleteTask);

export default router;
