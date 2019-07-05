const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
	precio: {
		type: Number,
		default: 0
	},
	cant: {
		type: Number,
		default: 0
	},
	minimo: {
		type: Number,
		default: 0
	},
	maximo: {
		type: Number,
		default: 0
    },
    costo: {
		type: Number,
		default: 0
	}
});
