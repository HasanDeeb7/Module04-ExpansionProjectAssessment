import sequelize from "./config.js";
import { Product } from "./models/productsModel.js";
import { User } from "./models/userModel.js";

User.hasMany(Product, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Product.belongsTo(User, { onDelete: "CASCADE", onUpdate: "CASCADE" });

// await sequelize.sync({ alter: true });
