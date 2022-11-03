import Router from "express";
import { getUser, loginUser, registerUser } from "../Controllers/UserController";
const router = Router();

router.get("/v2", (req, res) => {
  res.json("Test123");
});
router.get("/get-user", getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
