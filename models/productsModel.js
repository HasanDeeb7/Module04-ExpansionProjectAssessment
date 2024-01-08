import { DataTypes } from "sequelize";
import sequelize from "../config.js";
import { User } from "./userModel.js";

export const Product = sequelize.define("Product", {
  title: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: { len: [10, Infinity] },
  },
  price: { type: DataTypes.INTEGER, allowNull: false },
  supplier: { type: DataTypes.STRING },
});
