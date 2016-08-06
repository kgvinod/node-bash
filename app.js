var express = require('express');
var app = express();
var spawn = require('child_process').spawn;
var util = require('util');
var exec = require('child_process').exec;
 

app.get('/', function (req, res) {
    res.send('Hello World!');

    function puts(error, stdout, stderr) { console.log(stdout) }
    exec("~/work/node-bash/hello.sh", puts);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
