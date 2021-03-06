var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var materialSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    mName: {
        type: String,
        required: [true, "Material name is required"]
    },
    mNumber: {
        type: String,
        required: [true, "Model number is required"]
    },
    productionDate: {
        type: String,
        default: Date().toString()
    },
    mWeight: {
        type: String,
        required: [true, "Material weight is required"]
    },
    mQuantity: {
        type: Number,
        required: [true, "Material quantity is required"]
    },
    mFiles: []
});

materialSchema.plugin(autoIncrement.plugin, {
    model: 'Material',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var Material = db.model('Material', materialSchema);

module.exports = Material;