import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    patchProduct
} from "../controllers/product.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const productRouter = Router();
productRouter.use(authMiddleware);

// Get all products
productRouter.get("/", getAllProducts);

// Get a single product by id
productRouter.get("/:id", getProductById);

// Add a new product
productRouter.post("/", addProduct);

// Update a product
productRouter.put("/:id", updateProduct);

// Delete a product
productRouter.patch("/:id/:status", patchProduct);

export default productRouter;