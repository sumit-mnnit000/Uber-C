const dotenv= require('dotenv');
dotenv.config();
const cors= require('cors');

const express= require('express');
const app= express();
const cookoiparser= require('cookie-parser');
const connectToDb= require('./Db/db');
const userRoutes= require('./routes/user.routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectToDb();
app.use(cors());

app.use(cookoiparser());
app.use('/users', userRoutes);
app.get('/', (req,res)=>{
    res.send("Hello World");
});


module.exports= app;