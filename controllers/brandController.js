import Brand from "../models/Brand.js";

export const getBrands = async(req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const getBrandById = async(req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        res.json(brand);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const saveBrand = async(req, res) => {
    const brand = new Brand(req.body);
    try {
        const savedBrand = await brand.save();
        res.status(201).json(savedBrand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const updateBrand = async(req, res) => {
    const cekId = await Brand.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
        const updatedBrand = await Brand.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedBrand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

export const deleteBrand = async(req, res) => {
    const cekId = await BranddeleteBrand.findById(req.params.id);
    if (!cekId) return res.status(404).json({ message: "Data tidak ditemukan" });
    try {
        const deletedBranddeleteBrand = await BranddeleteBrand.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedBranddeleteBrand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}