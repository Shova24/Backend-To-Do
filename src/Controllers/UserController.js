export const registerUser = async (req, res) => {
  try {
    res.status.json("User Register");
  } catch (err) {
    const error = new Error("Registation Failled");
    res.status(404).json(error.message);
  }
};
export const loginUser = async (req, res) => {
  try {
    res.status.json("User Logged In");
  } catch (err) {
    const error = new Error("Login Failled");
    res.status(404).json(error.message);
  }
};
export const getUser = async (req, res) => {
  try {
    res.status.json("User Users List");
  } catch (err) {
    const error = new Error("Get User  Failled");
    res.status(404).json(error.message);
  }
};
