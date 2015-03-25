Meteor.methods({
  getCaInfo: function () {
    return Cas.findOne({});
  }
});
