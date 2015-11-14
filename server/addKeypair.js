Meteor.methods({
  addKeypair: function (newcn, caid, owner, username) {
    Keypairs.insert({
      cn: newcn,
      createdAt: new Date(),
      caId: caid,
      owner: owner,
      username: username
    });
  }
});
