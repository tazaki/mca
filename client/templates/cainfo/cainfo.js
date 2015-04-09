Meteor.subscribe('cas');

Template.cainfo.events({
  "click #button_createca": function (event) {
    Router.go('createca');
  },
  'click #button_download_ca': function (event) {
    window.location.href = 'cacert/' + this._id;
  }
});

Template.cainfo.helpers({
  'cainfo': function () {
    return Cas.findOne();
  }
});
