Template.addKeypair.events({
  "submit #form-addkeypair": function (event) {
    var cn = event.target[0].value;
    console.log(event.target[0].value);

    Meteor.call("createKeypair", cn, new Date(), function (er, res) {
      if (er) throw er;
      console.log(res);
      Meteor.call('addKeypair', cn, new Date());
    });

    event.target[0].value = '';
    return false;
  }
});
