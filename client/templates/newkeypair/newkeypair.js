Template.newkeypair.events({
  "submit .new-keypair": function (event) {
    event.preventDefault();
    var cn = event.target.children[0].children[1].value;
    var userid = Meteor.userId();
    var username = 'anon';

    if(Meteor.user()) {
      username = Meteor.user().username;
    }

    Meteor.call('addKeypair', cn, this._id, this.cn, userid, username);
    event.target.children[0].children[1].value = "";
  }
});
