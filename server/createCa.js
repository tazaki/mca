Meteor.methods({
  createCa: function (cn, email, locale_name, org_name, state, country) {

    var resp = '';

    // Create directory/file structure
    createBaseFiles();

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
