import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import routerCategory from "./routers/category.routes";
import routerProduct from "./routers/product.routes";

const app = express();

app.use(express.json());

app.use("/categories", routerCategory)
app.use("/products", routerProduct)

export default app.listen(3333, () => {
  startDatabase()
});