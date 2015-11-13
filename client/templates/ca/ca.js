Meteor.subscribe("keypairs");

Template.ca.helpers({
  keypairs: function () {
    return Keypairs.find({caId: this._id});
  }
});

Template.ca.events({
  "submit .new-keypair": function (event) {
    event.preventDefault();
    var cn = event.target.children[0].children[1].value;
    Meteor.call('addKeypair', cn, this._id);
    event.target.children[0].children[1].value = "";
  },
  "click .keypair-row": function (event) {
    console.log(this._id);
    Router.go('keypairs.show', {_id: this._id});
  },
  "click .ca-info-button": function (event) {
    Router.go('cas.show', {_id: this._id});
  }
});
