import express from "express";
import mongoose from "mongoose";
import routerBrand from "./routes/brand.js";
import routerProduct from "./routes/product.js";
import routerCategory from "./routes/category.js";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://localhost:27017/restful_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));


app.use(cors());
app.use(express.json());
app.use('/product', routerProduct);
app.use('/category', routerCategory);
app.use('/brand', routerBrand);

app.listen('3000', () => console.log('Server Running at port: 3000'));