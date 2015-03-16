Meteor.publish("Cas", function () {
  return Cas.find({});
});

Meteor.publish("Keypairs", function () {
  return Keypairs.find({});
});
