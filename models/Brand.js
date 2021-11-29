import mongoose from "mongoose";

const Brand = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

});

export default mongoose.model('Brands', Brand);