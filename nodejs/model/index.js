const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const boardSchema = require('./schemas/board');

const imgSchema = new Schema({
	width: Number,
	height: Number,
});

module.exports = {
	boardCollection: mongoose.model('Board', boardSchema),
}