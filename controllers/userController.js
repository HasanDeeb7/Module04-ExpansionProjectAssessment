import bcryptjs from "bcryptjs";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
export async function signUp(req, res) {
  const { username, password, role } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ error: "All Fields are required" });
    }
    const hashedPass = bcryptjs.hashSync(password, 10);
    const user = await User.create({
      username: username,
      password: hashedPass,
      role: role || "user",
    });
    if (user) {
      return res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function signIn(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "All Fields are required" });
  }
  const user = await User.findOne({ where: { username: username } });
  if (!bcryptjs.compareSync(password, user.password)) {
    return res.status(403).json({ error: "Wrong Password!" });
  }
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET
  );
  return res
    .cookie("access_token", token, {
      secure: true,
      httpOnly: true,
      sameSite: "None",
    })
    .json(user);
}
