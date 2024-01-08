import { DataTypes } from "sequelize";
import sequelize from "../config.js";

export const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: DataTypes.ENUM("user", "creator"),
});
