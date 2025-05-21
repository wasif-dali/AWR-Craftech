const express = require('express')
const mongoose = require('mongoose')
const cookieParser =require('cookie-parser');
const cors= require('cors');
mongoose
.connect(
    "mongodb+srv://awrcraftechsre:QtjdkqTj0kM1QhcJ@awrcraftech.bpvmssk.mongodb.net/"
)
.then(()=>console.log('MongoDB connected')).catch((error) => console.log(error));
const app =express()
const PORT = process.env.PORT || 5000;

app.use(
     cors({
        origin : 'http://localhost:5173/',
        method : ['GET','POST','DELETE','PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Exprires',
            'Pragma'
        ],
        Credentials : true 

     })
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log(`Server is now running on the port ${PORT}`))