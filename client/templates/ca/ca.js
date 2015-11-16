Meteor.subscribe("keypairs");

Template.ca.helpers({
  keypairs: function () {
    return Keypairs.find({caId: this._id});
  }
});

Template.ca.events({
  "click .keypair-row": function (event) {
    Router.go('keypairs.show', {_id: this._id});
  },
  "click .ca-info-button": function (event) {
    Router.go('cas.show', {_id: this._id});
  }
});
