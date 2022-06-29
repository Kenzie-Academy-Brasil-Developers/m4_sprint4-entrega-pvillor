import database from "../../database";

    const updateProductService = async (name, price, id) => {
      try {
        const res = await database.query(
          "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
          [name, price, id]
        );
    
        return res.rows[0];
      } catch (err) {
        throw new Error(err);
      }
    };
    
    export default updateProductService;