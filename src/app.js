import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import routerCategory from "./routers/category.routes";
import routerProduct from "./routers/product.routes";

const app = express();

const port = process.env.NODE_ENV === "test"
  ? process.env.PORT_TEST 
  : process.env.PORT

app.use(express.json());

app.use("/categories", routerCategory)
app.use("/products", routerProduct)

export default app.listen(port, () => {
  startDatabase()
});