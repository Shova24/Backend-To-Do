import Users from "../Models/UsersModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role_id } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      email,
      role_id,
      password: hashedPassword,
    };
    await Users.create(user);
    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    if (error.message === "Username already in use!") {
      res.status(200).json({ message: error.message });
      return;
    }
    if (error.message === "Email address already in use!") {
      res.status(200).json({ message: error.message });
      return;
    }
    res.status(404).json({ message: error.message });
    return;
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
      raw: true,
    });
    if (!user) {
      const err = new Error("User not found");
      res.status(200).json({ message: err.message });
      return;
    }
    const password_matched = await bcrypt.compare(req.body.password, user.password);
    if (!password_matched) {
      const err = new Error("Password not matched!!!");
      res.status(200).json({ message: err.message });
      return;
    }
    const accessToken = jwt.sign(user, "jwt-secret", { expiresIn: "50m" });

    res.status(200).json({ token: accessToken });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await Users.findAll({ raw: true });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
