Meteor.publish("cas", function () {
  return Cas.find({});
});

Meteor.publish("keypairs", function () {
  return Keypairs.find();
});
