const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const boardRouter = require('./route/board');
const DBURL = 'mongodb+srv://whdtn859:bjs854625@portfolio.nqbdy2b.mongodb.net/?retryWrites=true&w=majority';
const PORT = 3000;


app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:true}));

// ejs-layout 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');
app.set('layout', 'include/layout');
// 파일에 있는 script와 style 을 따로 추출하여 옮겨주는 설정
app.set('layout extractScripts', true);
app.set("layout extractStyles", true);


// mongodb를 연결해준다.
mongoose.connect(DBURL,{
	dbName: 'portfolio',
	useUnifiedTopology:true,
	useNewUrlParser: true,
})
.then((client) => {
	console.log('MongoDB conected');
})
.catch((err) => {
	console.log(err);
});

mongoose.connection.on('conected', () => console.log('MongoDB conected'));
mongoose.connection.on('disconected', () => console.log('MongoDB conected'));
mongoose.connection.on('reconected', () => console.log('MongoDB conected'));
mongoose.connection.on('reconectedFailed', () => console.log('MongoDB conected'));


app.get('/', (req, res) => {
	res.render('index');
});

app.use('/board', boardRouter);


// 해당 경로에 에러 생성
app.get('/error', (req, res) => {
	throw new Error('아이고 500 에러 떴네 ~ 서버에 문제 있는 듯?');
});

// 지정된 경로 외엔 404 에러
app.get('*', (req, res, next) => {
	res.status(404).render('error-404', {layout:'include/empty-layout'});
});

// 500에러
app.use(function(err, req, res, next){
	res.status(500).render('error-500', {errText : err, layout:'include/empty-layout'});
});



app.listen(PORT , function(){
	console.log(`http://localhost:${PORT}`);
});