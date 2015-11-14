Meteor.methods({
  addKeypair: function (newcn, caid, owner, username) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Keypairs.insert({
      cn: newcn,
      createdAt: new Date(),
      caId: caid,
      owner: owner,
      username: username
    });
  }
});
