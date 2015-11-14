Template.createca.events({
  "submit #form-createca": function (event) {
    var cn = event.target[0].value;
    var email = event.target[1].value;
    var locale_name = event.target[2].value;
    var org_name = event.target[3].value;
    var state = event.target[4].value;
    var country = event.target[5].value;
    var userId = Meteor.userId();
    var username = 'anon';

    if(Meteor.user()) {
      username = Meteor.user().username;
    }

    Meteor.call('addCa', cn, email, locale_name, org_name, state, country, userId, username, function (err, newid) {
      if (err) {
        console.log(err);
      } else {
        Router.go('cas.show', {_id: newid});
      }
    });
    return false;
  }
});
