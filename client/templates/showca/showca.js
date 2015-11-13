Template.showca.helpers({
  keypairs: function () {
    return Keypairs.find({caId: this._id});
  }
});
