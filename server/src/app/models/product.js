var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var productSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    pName: {
        type: String,
        required: [true, "Product name is required"]
    },
    pNumber: {
        type: String,
        required: [true, "Model number is required"]
    },
    manufacturingDate: {
        type: String,
        default: Date().toString()
    },
    pWeight: {
        type: String,
        required: [true, "Product weight is required"]
    },
    pQuantity: {
        type: Number,
        required: [true, "Product quantity is required"]
    },
    pFiles: [],
    materials: [{
        type: Number,
        ref: 'Material'
    }]
});

productSchema.plugin(autoIncrement.plugin, {
    model: 'Product',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var Product = db.model('Product', productSchema);

module.exports = Product;