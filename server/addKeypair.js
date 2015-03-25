Meteor.methods({
  addKeypair: function (cn, email, locale_name, org_name, state, country) {
    created = new Date();
    expires = new Date();
    expires.setFullYear(created.getFullYear()+1);
    Keypairs.insert({
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country,
      created: created,
      expires: expires,
      cert: mca_root_path + '/' + cn + '/crt.pem',
      key: mca_root_path + '/' + cn + '/key.pem'
    });
  }
});
