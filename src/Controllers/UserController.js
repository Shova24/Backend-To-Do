import Users from "../Models/UsersModel";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      email,
      password: hashedPassword,
    };
    await Users.create(user);
    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    res.status(404).json({ message: error.message });

    // const error = new Error("Registration Failed");
  }
};

export const loginUser = async (req, res) => {
  try {
    res.status(200).json("User Logged In");
  } catch (err) {
    const error = new Error("Login Failled");
    res.status(404).json(error.message);
  }
};
export const getUser = async (req, res) => {
  try {
    const users = await Users.findAll({ raw: true });
    res.status(200).json(users);
  } catch (err) {
    const error = new Error("Get User  Failed");
    res.status(404).json(error.message);
  }
};
