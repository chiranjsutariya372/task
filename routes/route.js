const express = require('express');
const { home, login, signup, session, loginget, loginpost, homepage, getblog, postblog, jwttoken, findblog, edit, remove } = require('../controllers/controllers');
const auth = require('../middleware/middleware');
const passport = require('passport');
const isAouth = require('../middleware/isAouth');
const users = express();

users.get('/',homepage)
users.get('/home',auth,home)
users.get('/signup',signup)
users.post('/login',login)
users.post("/token",jwttoken)
users.get('/loginpage',loginget)
users.post('/loginpost',passport.authenticate('local',{failureRedirect:'/loginpage',successRedirect:'/blog'}))
users.get('/blog',isAouth,getblog)
users.post('/blog',postblog)
users.get('/allblog',findblog)
users.patch('/edit/:id',edit)
users.delete('/delete/:id',remove)

module.exports=users;
