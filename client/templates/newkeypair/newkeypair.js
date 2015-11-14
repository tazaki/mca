Template.newkeypair.events({
  "submit .new-keypair": function (event) {
    event.preventDefault();
    var cn = event.target.children[0].children[1].value;
    Meteor.call('addKeypair', cn, this._id, Meteor.userId(), Meteor.user().username);
    event.target.children[0].children[1].value = "";
  }
});
