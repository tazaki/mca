Meteor.subscribe("keypairs");
Meteor.subscribe("cas");

Template.showkeypairs.helpers({
  cainfo: function () {
    console.log(Cas.find());
    return Cas.findOne();
  },
  keypairs: function () {
    return Keypairs.find({});
  }
});
