Meteor.methods({
  checkCa: function () {
    if (Cas.findOne()) {
      return true;
    } else {
      return null;
    }
  }
});
