var express = require('express');
var app = express();
var bodyParser     =        require("body-parser");

var spawn = require('child_process').spawn;
var util = require('util');

app.use(express.static(__dirname + '/public'));

//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/run_cmd', function (req, res) {
    //res.send('Hello World!');
    //res.send(req.body.cmd);

    var exec = require('child_process').exec;
    
    exec(req.body.cmd, function (error, stdout, stderr) {
      if (error) {
        console.error(error);
        //return;
      }
      //console.log("stdout " + stdout);
      res.send(stderr + stdout);
      //res.send((error != null)?error:"" + (stderr != null)?stderr:"" + (stdout != null)?stdout:"");
      //console.log("stderr " + stderr);
      //res.send(stderr);
    });    

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
