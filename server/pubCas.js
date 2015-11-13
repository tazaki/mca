Meteor.publish("cas", function () {
  return Cas.find();
});
