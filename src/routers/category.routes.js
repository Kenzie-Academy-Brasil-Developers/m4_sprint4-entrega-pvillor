import { Router } from "express";
import { categoryDataController, createCategoryController, deleteCategoryController, listCategoriesController, updateCategoryController } from "../controllers/category.controller";

const routerCategory = Router()

routerCategory.post("", createCategoryController);
routerCategory.get("", listCategoriesController);
routerCategory.patch("/:id", updateCategoryController);
routerCategory.delete("/:id", deleteCategoryController);
routerCategory.get("/:id", categoryDataController);

export default routerCategory