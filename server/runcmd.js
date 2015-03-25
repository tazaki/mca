runCmd = function (cmd, args, callback) {
    var spawn = Npm.require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    console.log("Starting process: " + cmd + ' ' + args.join(" "));

    child.on('error', function (err) {
      console.log(err);
      callback(err,null);
    });

    child.stdout.on('data', function (buffer) {
      console.log("data from " + cmd + args.join(" ") + " : " + buffer.toString());
      resp += buffer.toString();
    });

    child.stdout.on('end', function() {
      console.log("Ending process: " + cmd + args.join(" "));
      callback(null,resp);
    });

/*
    child.stderr.on('data', function (buff) {
      console.log("error:")
      console.log(buff.toString());
    });
*/

    child.on('exit', function (code) {
      console.log('exit code: ' + code);
    });

}
