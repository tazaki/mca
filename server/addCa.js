Meteor.methods({
  addCa: function (cn, email, locale_name, org_name, state, country, userid, username) {

    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    created = new Date();
    expires = new Date();
    expires.setFullYear(created.getFullYear()+10);

    var data = {
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country,
      created: created,
      expires: expires,
      userId: userid,
      username: username
      //cert: mca_root_path + 'cacrt.pem',
      //key: mca_root_path + 'cakey.pem'
    };
    return Cas.insert(data);
  }
});
