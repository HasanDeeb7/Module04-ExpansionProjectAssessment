import { where } from "sequelize";
import { Product } from "../models/productsModel.js";
import { User } from "../models/userModel.js";

export async function createProduct(req, res) {
  const userId = req.user.id;
  const { title, category, description, price } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    const product = await Product.create(req.body);
    product.setUser(user);
    return res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
}
export async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll({ include: User });
    return res.json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
}
export async function getOneProduct(req, res) {
  const id = req.query.id;
  try {
    if (!id) {
      return res.json({ error: "No id provided" });
    }
    const product = await Product.findByPk(id, { include: User });
    return res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
}
export async function updateProduct(req, res) {
  const updatedData = req.body;
  const { id } = req.body;
  console.log(id);
  try {
    const updatedProduct = await Product.update(updatedData, {
      where: { id: id },
    });
    return res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Internal Server Error" });
  }
}
export async function deleteProduct(req, res) {
  const id = req.query.id;
  try {
    await Product.destroy({ where: { id: id } });
    return res.json({ message: "Product Deleted Successfuly" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
}
