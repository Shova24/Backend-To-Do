import Roles from "../Models/Roles";

export const createRole = async (req, res) => {
  try {
    console.log(req.body.role);
    await Roles.create({ role: req.body.role });
    res.status(201).json({ message: "Role Created" });
  } catch (error) {
    res.status(404).json("Role Created Failed : " + error.message);
  }
};
export const getRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll({ raw: true });
    console.log("Roles : ", roles);
    res.status(200).json({ message: roles });
  } catch (error) {
    res.status(404).json("Role get Failed : " + error.message);
  }
};
