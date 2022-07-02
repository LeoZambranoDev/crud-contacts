// var createError = require('http-errors');
const express = require('express');
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');



var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));




app.listen(process.env.PORT || 8000,() => console.log('Server running in 8000 port'));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
    //   next(createError(404));
    // });
    
    // error handler
    // app.use(function(err, req, res, next) {
        //   // set locals, only providing error in development
        //   res.locals.message = err.message;
        //   res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        //   // render the error page
        //   res.status(err.status || 500);
        //   res.render('error');
        // });
        
        const userRouter = require('./src/routes/user');
        const contactRouter = require('./src/routes/contact');
        app.use('/user', userRouter);
        app.use('/contact', contactRouter);



    module.exports = app;
