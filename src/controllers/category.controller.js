import categoryDataService from "../services/categories/categoryData.service";
import createCategoryService from "../services/categories/createCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import updateCategoryService from "../services/categories/updateCategory.service";

export const createCategoryController = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await createCategoryService(name);

    return res.status(201).json({
      message: "Category created",
      category: category
      })
  } catch (error) {
    return res.status(400).json({message: error.message})
  }
}

export const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();

    return res.json(categories);
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCategory = await updateCategoryService(name, id);

    return res.json({
      message: "Category updated",
      category: updatedCategory
      });
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteCategoryService(id);

    return res.status(204).json({
      message: "Category deleted",
      category: deletedCategory
    });
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};

export const categoryDataController = async (req, res) => {
  const { id } = req.params;

  try {
    const categoryData = await categoryDataService(id);

    return res.json(categoryData);
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
};