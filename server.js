const bodyParser = require('body-parser');
const express=require('express');
const routing=require('./todoRoute');
const dotenv=require('dotenv');
const compression=require('compression')
dotenv.config({path:'./config.env'})
const app=express();
app.set('view engine', 'ejs') //for rendering my html page
app.use(express.static('public')) // serving static file
app.use(express.json());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1',routing);
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server is listing at port ',port)
})

