Meteor.methods({
  addCa: function (cn, email, locale_name, org_name, state, country, expires) {

    Cas.insert({
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country,
      expires: expires,
      cert: mca_root_path + 'cacrt.pem',
      key: mca_root_path + 'cakey.pem'
    });
  },
});
