const express = require('express');
const cookieParser = require('cookie-parser');
const server = require('./config/db');
const users= require('./routes/route');
const session = require('express-session');
const passport = require('passport');
const localpassport = require('./middleware/middelware.login');
const blogroutes = require('./routes/blog.route');
localpassport(passport)
const app = express();

app.set("view engine","ejs")
app.use(express.static(__dirname+'/public'));
app.set('views',__dirname+'/views');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret:'secret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(users)
app.use(blogroutes)


app.listen(8080,()=>{
    console.log('listening on port 8080');
    server();
});
