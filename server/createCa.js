Meteor.methods({
  createCa: function (cn, email, locale_name, org_name, state, country) {

    tempData = { "name": "Alan", "hometown": "Somewhere, TX","kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    writeTemplate('templates/openssl.conf.hb', tempData);

    return 'ran';

    // Create directory/file structure
    /*
    console.log('Creating files and directories for ca.');
    createBaseFiles(function (data) {
      console.log(data);
    });
*/
    // Add ca to database
    //Meteor.call('addCa', cn, email, locale_name, org_name, state, country);

    // Run commands to create ca pub/key
/*

    Future = Npm.require('fibers/future');
    var mf = new Future();

    //var cmd = 'ping';
    //var args = ['-c','1','127.0.0.1']

    runCmd(cmd, args, function (err, res) {
      if (err) mf.throw(err);
      mf.return(res);
    });
    //createBaseFiles();

    return mf.wait();
*/

  }

});
