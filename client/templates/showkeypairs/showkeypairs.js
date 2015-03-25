Meteor.subscribe("keypairs");
Meteor.subscribe("cas");

Template.showkeypairs.helpers({
  cainfo: function () {
    return Cas.findOne();
  },
  keypairs: function () {
    return Keypairs.find({});
  }
});

Template.showkeypairs.events({
  "submit #form-addkeypair": function (event) {
    var cn = event.target[0].value;
    //console.log(event.target[0].value);
    console.log(cainfo);
    /*
    Meteor.call("createKeypair", cn, new Date(), function (er, res) {
      if (er) throw er;
      console.log(res);
      Meteor.call('addKeypair', cn, new Date());
    });
*/

    event.target[0].value = '';
    return false;
  }
});
