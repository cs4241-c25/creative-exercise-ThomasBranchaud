const express = require('express');
const fs = require("node:fs")

const port = 3000;

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get('/creative-exercise-ThomasBranchaud/index.html*', (req, res) => {
  fs.readFile("index.html", function (err, content){
    if (err === null){
      res.end(content)
    }
    else {
    res.writeHeader(404)
      res.end("404 Error: File not Found")
    }
  })
})

app.get('/creative-exercise-ThomasBranchaud/js/app.js', (req, res) => {
  fs.readFile("js/app.js", function(err, content) {
    if (err === null){
      res.end(content)
    }
    else{
      res.end("404 Error: File not Found")
    }
  })
})

app.listen(port)
