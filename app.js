const http = require('http');
const express = require("express");
var fs = require('fs'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/Hay", (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>Hay</h1></body></html>');
});
app.get("/help/hello/:num1/:num2", (req, res) => {
  sum = parseInt(req.params.num1) + parseInt(req.params.num2)
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1>' + sum + '</h1></body></html>');
});
app.get("/", (req, res) => {
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    }
)}
);