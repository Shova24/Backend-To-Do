import Router from "express";
import { getUser, loginUser, registerUser } from "../Controllers/UserController";
const router = Router();
import { AuthorizedUser } from "../middlewares/UserAuth";

router.get("/v2", (req, res) => {
  res.json("Test123");
});
router.get("/get-user", AuthorizedUser, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
