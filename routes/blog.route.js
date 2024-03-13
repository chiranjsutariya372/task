const Router = require("express");
const Blog = require("../model/blog.Schema");
const isAouth = require("../middleware/isAouth");

const blogroutes=Router();

blogroutes.get('/newblog',isAouth,(req,res)=>{
    res.render('blog')
})

blogroutes.post('/newblog',async(req,res)=>{
    req.body.userId=req.userId
    let createblog=await Blog.create(req.body)
    console.log(createblog);
    res.send(createblog)
})

blogroutes.get('/blogfind',async(req,res)=>{
    let find=await Blog.find().populate("userId")
    console.log(find);
    res.send(find)
})

module.exports=blogroutes