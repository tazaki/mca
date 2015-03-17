Meteor.methods({
  addKeypair: function (cn) {
    Keypairs.insert({
      cn: cn,
      created: new Date(),
      expires: new Date()
    });
  }
});
