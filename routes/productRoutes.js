import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "../controllers/productController.js";
import { authenticate, checkRoles } from "../middleware/authenticate.js";

export const productRouter = Router();

productRouter.post(
  "/create",
  authenticate,
  checkRoles(["creator"]),
  createProduct
);
productRouter.get("/", getAllProducts);
productRouter.get("/one", getOneProduct);
productRouter.patch(
  "/update",
  authenticate,
  checkRoles(["creator"]),
  updateProduct
);
productRouter.delete('/delete', deleteProduct)