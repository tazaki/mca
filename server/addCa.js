Meteor.methods({
  addCa: function (cn, email, locale_name, org_name, state, country) {
    Future = Npm.require('fibers/future');
    var mf = new Future();

    created = new Date();
    expires = new Date();
    expires.setFullYear(created.getFullYear()+10);

    Cas.insert({
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country,
      created: created,
      expires: expires
      //cert: mca_root_path + 'cacrt.pem',
      //key: mca_root_path + 'cakey.pem'
    }, function (err,newid) {
      if (err) {
        mf.return(err);
      } else {
        mf.return(newid);
      }
    });
  return mf.wait();
  }
});
