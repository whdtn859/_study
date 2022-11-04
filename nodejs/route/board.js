const express = require('express');
const router = express.Router();
const BoardModel = require("../model/index");
const query = require('express');

// crud
async function board(){
	// create
	const created =  await BoardModel.boardCollection.create({
		title: "제목입니다",
		body: "내용입니다",
	});

	const multipleCreated = await BoardModel.boardCollection.create({
		item1,
		item2,
	});

	// read
	const boardList = await BoardModel.boardCollection.find(query);
	const boardListById = await BoardModel.boardCollection.findById(id);
	const boardListOne = await BoardModel.boardCollection.findOne(query);

	// update
	const updateResult = await BoardModel.boardCollection.updateOne(query, {

	});
	const updateResults = await BoardModel.boardCollection.updateMany(query, {

	});
	const updateById = await BoardModel.boardCollection.findByIdAndUpdate(id, {

	});
	const updateOne = await BoardModel.boardCollection.findOneAndUpdate(query, {

	});

	//delete
	const deleteResult = await BoardModel.boardCollection.deleteOne(query);
	const deleteResults = await BoardModel.boardCollection.deleteMany(query);
	const deleteById = await BoardModel.boardCollection.findByIdAndDelete(query);
	const deleteOne = await BoardModel.boardCollection.findOneAndDelete(query);
}

router.get('/', async (req, res, next) => {
	const { title, body, file } = req.body;
	try {
		const lists = BoardModel.boardCollection.find({
			title,
			body,
			file
		});
		res.render('board/list', {lists});
	} catch (err) {
		next(err);
	}
});

router.get('/write', async (req, res, next) => {
	try {
		await BoardModel.boardCollection.create(req.body);
		res.render('board/write');
	} catch (err) {
		next(err);
	}
});

router.post('/detail', (req, res) => {
	console.log(req.body);
	const lists = BoardModel.boardCollection.find(req.body);
	console.log(lists);
	res.render('board/detail', {list:req.body});
});

module.exports = router;