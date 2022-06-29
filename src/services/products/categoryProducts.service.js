import database from "../../database";

const categoryProductsService = async (category_id) => {
    try {
      const res = await database.query(
        "SELECT products.name, products.price, categories.name category FROM products INNER JOIN categories ON categories.id = products.category_id WHERE category_id = $1",
        [category_id]
      );

      return res.rows;
    } catch (err) {
      throw new Error(err);
    }
  };

  export default categoryProductsService