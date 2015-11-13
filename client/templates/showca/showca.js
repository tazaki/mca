Template.showca.helpers({
  keypairs: function () {
    return Keypairs.find({caId: this._id});
  }
});

Template.showca.events({
  "click .keypair-row": function (event) {
    Router.go('keypairs.show', {_id: this._id});
  }
});
