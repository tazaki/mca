Meteor.methods({
  addCa: function (newcn) {
    Future = Npm.require('fibers/future');
    var mf = new Future();
    Cas.insert({
      cn: newcn,
      createdAt: new Date()
    }, function (err,newid) {
      if (err) {
        mf.return(err);
      } else {
        mf.return(newid);
      }
    });
    return mf.wait();
  }
});
