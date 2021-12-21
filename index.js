const express = require('express');
const teacherRouter =require("./routes/teacher");
const bodyParser = require ('body-parser')
require("dotenv").config();

const app = express();
app.use(bodyParser.json())

const mongoose =require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_URL, ()=>{
    console.log("Conncted to db...");
})

app.use("/t", teacherRouter)



app.get('/', (req,res)=>{
    res.send('hello');
});

app.get('/api/course', (req,res) =>{
    res.send([1,2,3]);
});


app.get('/api/course/:id', (req,res) => {
    res.send(req.params.id);
}); 

app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params);
}); 

app.get('/api/create/:firstname/:lastname/:id', (req,res) => {
    res.send(req.params);
}); 




//  Assigneing PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listning on port ${port}...`));