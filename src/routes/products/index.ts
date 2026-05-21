import { Router } from "express";
import {
  addNewProduct,
  deleteProduct,
  listProducts,
  listProductsById,
  updateProduct,
} from "./productsController.js";

const router = Router();

router.get("/", listProducts);
router.get("/:price", listProductsById);

router.post("/", addNewProduct);
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct);

export default router;
