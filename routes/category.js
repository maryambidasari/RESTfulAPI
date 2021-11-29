import express from "express";
import {
    getCategorys,
    getCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController.js";

const routerCategory = express.Router();

routerCategory.get('/', getCategorys);
routerCategory.get('/:id', getCategoryById);
routerCategory.post('/', saveCategory);
routerCategory.patch('/:id', updateCategory);
routerCategory.delete('/:id', deleteCategory);

export default routerCategory;