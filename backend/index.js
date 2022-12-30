//importing express
const express = require ('express');
const userRouter= require('./routers/userRouter');
const compRouter= require('./routers/compRouter');
const utilRouter= require('./routers/utils');
const cors = require('cors');
//initializing express
const app= express();
const port = 5000;

app.use(cors({origin: ['http://localhost:3000']}))
app.use(express.json());

// middleware 
app.use('/user',userRouter);
app.use('/components',compRouter);
app.use('/util',utilRouter);

app.use(express.static('./static/uploads'));

app.get('/',(req,res) => {
    res.send('server accepted')

});
app.get('/home',(req,res) => {
    res.send('response from home')

});
app.get('/add',(req,res) => {
    res.send('response from add')

});

//starting the server
app.listen(port,()=> {console.log('server started')});