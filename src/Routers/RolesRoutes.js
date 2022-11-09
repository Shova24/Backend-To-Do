import Router from "express";
import { createRole, getRoles } from "../Controllers/Role.Controller";
import { AuthorizedUser } from "../middlewares/UserAuth";
const router = Router();

router.post("/create-role", AuthorizedUser, createRole);
router.get("/get-roles", AuthorizedUser, getRoles);

export default router;
