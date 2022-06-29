import { Router } from "express";
import { categoryProductsController, createProductController, deleteProductController, listProductsController, productDataController, updateProductController } from "../controllers/product.controllers";

const routerProduct = Router()

routerProduct.post("", createProductController);
routerProduct.get("", listProductsController);
routerProduct.patch("/:id", updateProductController);
routerProduct.delete("/:id", deleteProductController);
routerProduct.get("/:id", productDataController);
routerProduct.get("/category/:category_id", categoryProductsController);

export default routerProduct