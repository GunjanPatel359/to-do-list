const express=require('express');
const app=express();
const connectDB=require('./db/connect');
require('dotenv').config();

const Task=require('./routes/task');

//middleware
app.use(express.json());

//routes
app.use(express.static('./public'))
app.use('/api/v1/user',Task);

app.use('/',(req,res)=>{
    console.log('working');
    res.end("working");
})

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000,()=>{
            console.log('server is started...');
        })
    } catch (err) {
        console.log("error while connecting to server");
    }
}
start();
