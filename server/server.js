if (Meteor.isServer) {

  Meteor.methods({
    createCa: function (cn, email, locale_name, org_name, state, country) {

      Meteor.call('createcafiles');

      var spawn = Npm.require('child_process').spawn;
      var cmd = 'ping';
      var args = ['-c','5','127.0.0.1'];
      var child = spawn(cmd, args);
      var resp = "";
      Future = Npm.require('fibers/future');
      var mf = new Future();

      console.log("Starting process: " + cmd + ' ' + args.join(" "));

      child.on('error', function (err) {
        console.log(err);
        mf.throw(err);
      });

      child.stdout.on('data', function (buffer) {
        console.log("data from " + cmd + args.join(" ") + " : " + buffer.toString());
        resp += buffer.toString() + '<br>';
      });

      child.stdout.on('end', function() {
        console.log("Ending process: " + cmd + args.join(" "));
        mf.return(resp);
      });

      child.stderr.on('data', function (buff) {
        console.log("error:")
        console.log(buff.toString());
      });

      child.on('exit', function (code) {
        console.log('exit code: ' + code);
      });

      return mf.wait();

    },

  });

}
