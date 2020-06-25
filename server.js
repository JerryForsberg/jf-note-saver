var express = require('express');
//adding a comment

const apiRouter = require('./routes/api-routes');
const htmlRouter = require('./routes/html-routes');

const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/index.js', express.static(path.join(__dirname, '../public/index.js')));
app.use('/api', apiRouter);
app.use('/', htmlRouter);

app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT)
});

