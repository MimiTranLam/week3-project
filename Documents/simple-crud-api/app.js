const express = require('express');
//const router = express().router;
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', indexRouter);
// app.use('/users', usersRouter);

app.use((req, res, next) => {
    const error = new Error("Url request invalid");
    error.statusCode = 404;
    console.log(`error request url`, req.path);
    next (error);
});

app.use((err, req, res, next) => {
    //console.log(err);
    return res.send(err.statusCode).send(err.message);
})

module.exports = app;
