Template.addKeypair.events({
  "submit #form-addkeypair": function (event) {
    var cn = event.target[0].value;
    Meteor.call('getCaInfo', function (err, cainfo) {
      if (err) throw err;
      Meteor.call("createKeypair",
        cn,
        cainfo.email,
        cainfo.localename,
        cainfo.orgname,
        cainfo.state,
        cainfo.country,
        mca_root_path,
        function (er, res) {
          if (er) throw er;
          // TODO do something with this response
          Meteor.call('addKeypair',
            cn,
            cainfo.email,
            cainfo.localename,
            cainfo.orgname,
            cainfo.state,
            cainfo.country
          );
        }
      );
    });

    event.target[0].value = '';
    return false;
  }
});
