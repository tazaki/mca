Meteor.methods({
  createCa: function (cn, email, locale_name, org_name, state, country) {

    //Meteor.call('addCa', cn, email, locale_name, org_name, state, country);

    return "Done";

/*
    Future = Npm.require('fibers/future');
    var mf = new Future();

    runCmd('ping',['-c','1','127.0.0.1'], function (err, res) {
      if (err) mf.throw(err);
      mf.return(res);
    });
    //createBaseFiles();

    return mf.wait();
*/

  },

});
