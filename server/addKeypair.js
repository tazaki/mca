Meteor.methods({
  addKeypair: function (newcn, caid, caname, userid, username) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Keypairs.insert({
      cn: newcn,
      createdAt: new Date(),
      caId: caid,
      caname: caname,
      userId: userid,
      username: username
    });
  }
});
