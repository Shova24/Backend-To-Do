import Router from "express";
import UserRouter from "./UserRouter";
import TaskRouter from "./TaskRouter";
import RolesRouter from "./RolesRoutes";
const router = Router();

router.use("/users", UserRouter);
router.use("/task", TaskRouter);
router.use("/roles", RolesRouter);

export default router;
