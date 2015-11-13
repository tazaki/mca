Meteor.subscribe("cas");

Template.calist.helpers({
  cas: function () {
    return Cas.find({});
  }
});
