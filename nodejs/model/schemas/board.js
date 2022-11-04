const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema(
	{
		id: mongoose.Schema.Types.ObjectId,
		title: {type: String, required: [true, 'Title is required'],},
		body: {type: String, required: [true, 'Contents is required'],},
		file: {type: String, },
		fileMulti: {type: String, },
		createdAt: {type: Date},
		updatedAt: {type: Date},
	},
	{
		timestamps: true,
		versionKey : false
	}
);


module.export = boardSchema;