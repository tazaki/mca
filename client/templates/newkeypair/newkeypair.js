Template.newkeypair.events({
  "submit .new-keypair": function (event) {
    event.preventDefault();
    var cn = event.target.children[0].children[1].value;
    Meteor.call('addKeypair', cn, this._id);
    event.target.children[0].children[1].value = "";
  }
});
