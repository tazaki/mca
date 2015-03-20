Meteor.methods({
  addCa: function (cn, email, locale_name, org_name, state, country, created, expires) {
    Cas.insert({
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country,
      created: created,
      expires: expires
    });
  },
});
