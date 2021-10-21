import calculation from "./scripts/calculation.js";
//import * as express from './node_modules/express/index.js';
import * as express from './node_modules/express';
//import bodyParser from './node_modules/body-parser/index.js';
//import ejs from './node_modules/ejs/ejs.js';

// const express = require('express');
// const bodyParser = require('body-parser');
// const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/sa', function(req, res){
    res.render('index');
});


app.listen(3000, function(){
    console.log("Server started on port 3000")
})




if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
    .then(registration => {
        console.log("SW Registered!\n", registration);
    }).catch( error => {
        console.log("SW Registration failed\n", error);
    })
}

