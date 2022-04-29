const express = require('express');
const path = require('path');
const ejs = require('ejs');
// const bodyParser = require('body-parser');
require('./db/conn');
const User= require('./models/userinfo');

const app = express();


//middleware
const staticPath=path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));

//routing
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/contact', async (req, res) => {
    try {
        // res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render('index');
    }
    catch (err) {
        res.status(500).send(err);
    }
})

app.listen(3000,function(){
    console.log('listening on port 3000');
});