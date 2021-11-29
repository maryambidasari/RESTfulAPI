import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const routerProduct = express.Router();

routerProduct.get('/', getProducts);
routerProduct.get('/:id', getProductById);
routerProduct.post('/', saveProduct);
routerProduct.patch('/:id', updateProduct);
routerProduct.delete('/:id', deleteProduct);


export default routerProduct;