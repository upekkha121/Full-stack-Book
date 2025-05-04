const express = require('express');
const app = express();  

require('./database/connection')


// // let app = require("express")()

// //API

//get
app.get("/books",  function(req, res){
    //logic to fetch books from database


    res.json({
        message: "books fetched successfully"
    })
})

app.post("/books",function(req,res){
    //logic to add book to database goes her.

    res.json({
        message: "Book added successfully"
    })
})
app.delete("/books/:id",function(req,res){
    //logic to add book to database goes her.

    res.json({
        message: "Book deleted successfully"
    })
})
app.patch("/books/:id",function(req,res){
    //logic to add book to database goes her.

    res.json({
        message: "Book updated successfully"
    })
})

// app.get("/",(req,res)=>{
//     res.json({
//         name: "Manish",
//         address : "Itahari"
//     })
// })

// //route
// app.get("/about",(req,res)=>{
//     res.json({
//         name: "This is about page"
//     })
// })

// app.post("/register",function(req,res){
//     res.json({
//         name: "register sucessfully"
//     })
// })
// app.get("/register",function(req,res){
//     res.json({
//         name: "register sucessfully"
//     })
// })



//connection string

// DATABASE_URL="postgresql://postgres.yfidfmzhhmlezonhpaea:ahk2ep121601@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"


app.listen(4000,function(){
    console.log("server/backend/node project has started at port 3000")
})

// app.listen(3000,()=>{
//     console.log("server/backend/node project has started at port 3000")
// })