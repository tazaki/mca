function showData (arr) {
  $('#creatingca-panel-content p').remove();
  for (var i = 0, len = arr.length; i < len; i++) {
    $('#creatingca-panel-dynamic-content').append('<p>' + arr[i] + '</p>');
  }
  $('#creatingca-panel-content img').addClass('hidden');
  $('#creatingca-panel-content p').removeClass('hidden');
  $('#creatingca-panel-content button').removeClass('hidden');
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

      Meteor.call("createCa", cn, email, locale_name, org_name, state, country, new Date(), function (er, res) {
        if (er) showData(er);
        else showData(res);
        Meteor.call('addCa', cn, email, locale_name, org_name, state, country, new Date());
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
