Meteor.methods({
  addKeypair: function (newcn, caid) {
    Keypairs.insert({
      cn: newcn,
      createdAt: new Date(),
      caId: caid
    });
  }
});
