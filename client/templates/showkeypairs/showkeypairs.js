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
  'click .button_download_kpcert': function (event) {
    window.location.href = 'keypaircert/' + this._id;
  },
  'click .button_download_kpkey': function (event) {
    window.location.href = 'keypairkey/' + this._id;
  },
});
