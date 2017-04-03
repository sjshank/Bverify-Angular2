var db = require('../middlewares/db'),
    Schema = db.Schema,
    autoIncrement = require('mongoose-auto-increment');

var materialShipSchema = new Schema({
    id: {
        type: Number,
        unique: true
    },
    material: {
        type: Number,
        ref: 'Material'
    },
    shipQuantity: {
        type: Number,
        required: [true, "Material shipment quantity is required"]
    },
    carrier: {
        type: String,
        required: [true, "Shipment carrier is required"]
    },
    shipTo: [{
        type: String,
        ref: 'User'
    }]

});

materialShipSchema.plugin(autoIncrement.plugin, {
    model: 'MaterialShip',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

var MaterialShip = db.model('MaterialShip', materialShipSchema);

module.exports = MaterialShip;