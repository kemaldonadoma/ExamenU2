const mongoose = require('mongoose');


var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;


  module.exports = new mongoose.Schema ({
    folio:{
        type:String,
        required: true
    },
	fecha: {
		type: Date
	},
	cant: {
		type: Number,
		required: true
    },
    producto:{
        type: ObjectId,
        ref: "Producto"
    },
	subtotal: {
		type: Number,
		default: 0
	},
	iva: {
		type: Number,
		default: 0
    },
    total: {
		type: Number,
		default: 0
	}
});
