var express = require('express');
var app = express();
var spawn = require('child_process').spawn;
var _ = require('underscore'); // for some utility goodness
var util = require('util');
var exec = require('child_process').exec;
 

app.get('/', function (req, res) {
    res.send('Hello World!');

    var deploySh = spawn('sh', [ 'deploy.sh' ], {
        cwd: process.env.HOME,
        env:_.extend(process.env, { PATH: process.env.PATH + ':/usr/local/bin' })
    });

    function puts(error, stdout, stderr) { console.log(stdout) }
    exec("~/work/node/expressapp/deploy.sh", puts);

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
