//import express from 'express';
var express = require('express');
var app = express();
// app.configure(function () {
//     app.use(
//         "/", //the URL throught which you want to access to you static content
//         express.static(__dirname + '/dist') //where your static content is located in your filesystem
//     );
// });
app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
    res.sendfile('index.html');
})

app.listen('3000', function() {
    console.log('server start');
});