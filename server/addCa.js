Meteor.methods({
  addCa: function (cn, email, locale_name, org_name, state, country) {
    Cas.insert({
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country
    });

    Keypairs.insert({
      cn: 'testcn1',
      created: new Date(),
      expires: new Date()
    });

    Keypairs.insert({
      cn: 'testcn2',
      created: new Date(),
      expires: new Date()
    });


  },

});
