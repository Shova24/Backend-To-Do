import Router from "express";
import UserRouter from "./UserRouter";
import TaskRouter from "./TaskRouter";
const router = Router();

router.use("/users", UserRouter);
router.use("/task", TaskRouter);

export default router;
