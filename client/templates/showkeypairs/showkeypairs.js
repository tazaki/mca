Meteor.subscribe("keypairs");
Meteor.subscribe("cas");

Template.showkeypairs.helpers({
  cainfo: function () {
    return Cas.findOne();
  },
  keypairs: function () {
    return Keypairs.find({});
  }
});
