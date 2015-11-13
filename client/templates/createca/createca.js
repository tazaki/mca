Template.createca.events({
  "submit .new-ca": function (event) {
    event.preventDefault();
    var text = event.target[0].value;
    Meteor.call('addCa', text, function (err, newid) {
      if (err) {
        console.log(err);
      } else {
        Router.go('cas.show', {_id: newid});
      }
    });
    event.target[0].value = "";
  }
});
