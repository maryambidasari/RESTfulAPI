import express from "express";
import {
    getBrands,
    getBrandById,
    saveBrand,
    updateBrand,
    deleteBrand
} from "../controllers/BrandController.js";

const routerBrand = express.Router();

routerBrand.get('/', getBrands);
routerBrand.get('/:id', getBrandById);
routerBrand.post('/', saveBrand);
routerBrand.patch('/:id', updateBrand);
routerBrand.delete('/:id', deleteBrand);

export default routerBrand;