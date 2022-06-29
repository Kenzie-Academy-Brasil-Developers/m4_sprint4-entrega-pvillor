import categoryProductsService from "../services/products/categoryProducts.service";
import createProductService from "../services/products/createProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductsService from "../services/products/listProducts.service";
import productDataService from "../services/products/productData.service";
import updateProductService from "../services/products/updateProduct.service";

export const createProductController = async (req, res) => {
    const { name, price, category_id } = req.body;
  
    try {
      const product = await createProductService(name, price, category_id);
  
      return res.status(201).json({
        message: "Product created",
        product: product
      })
    } catch (error) {
      return res.status(400).json({message: error.message})
    }
  }

  export const listProductsController = async (req, res) => {
    try {
      const products = await listProductsService();
  
      return res.json(products);
    } catch (error) {
      return res.status(400).json({message: error.message});
    }
  };

  export const productDataController = async (req, res) => {
    const { id } = req.params

    try {
      const products = await productDataService(id);
  
      return res.json(products);
    } catch (error) {
      return res.status(400).json({message: error.message});
    }
  };

  export const updateProductController = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
  
    try {
      const updatedProduct = await updateProductService(name, price, id);
  
      return res.status(200).json({
        message: "Product updated",
        product: updatedProduct
      });
    } catch (error) {
      return res.status(400).json({message: error.message});
    }
  };

  export const deleteProductController = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedProduct = await deleteProductService(id);
  
      return res.status(204).json({
        message: "Product deleted",
        product: deletedProduct
      });
    } catch (error) {
      return res.status(400).json({message: error.message});
    }
  };

  export const categoryProductsController = async (req, res) => {
    const { category_id } = req.params;
  
    try {
      const categoryData = await categoryProductsService(category_id);
  
      return res.json(categoryData);
    } catch (error) {
      return res.status(400).json({message: error.message});
    }
  };