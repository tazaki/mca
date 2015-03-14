function showData (text) {
  $('#creatingca-panel-content p').html(text);
  $('#creatingca-panel-content img').addClass('hidden');
  $('#creatingca-panel-content p').removeClass('hidden');
}

Template.createca.events({
  "submit #form-createca": function (event) {
      var cn = event.target[0].value;
      var email = event.target[1].value;
      var locale_name = event.target[2].value;
      var org_name = event.target[3].value;
      var state = event.target[4].value;
      var country = event.target[5].value;
      var pass = event.target[6].value;

      Meteor.call("createCa", cn, email, locale_name, org_name, state, country, function (er, res) {
        if (er) showData(er);
        else showData(res);
      });

      event.target[0].value = '';
      event.target[1].value = '';
      event.target[2].value = '';
      event.target[3].value = '';
      event.target[4].value = '';
      event.target[5].value = '';
      event.target[6].value = '';

      Router.go('creatingca');

      return false;

    }
});
