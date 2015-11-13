Meteor.publish("keypairs", function () {
  return Keypairs.find();
});
