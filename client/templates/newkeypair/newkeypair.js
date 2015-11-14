Template.newkeypair.events({
  "submit .new-keypair": function (event) {
    event.preventDefault();
    var cn = event.target.children[0].children[1].value;
    var userId = Meteor.userId();
    var username = 'anon';

    if(Meteor.user()) {
      username = Meteor.user().username;
    }

    Meteor.call('addKeypair', cn, this._id, userId, username);
    event.target.children[0].children[1].value = "";
  }
});
