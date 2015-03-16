Template.layout.events({
  "click .navbar li": function (event) {
    $("li").removeClass("active");
    $(event.target.parentElement).addClass('active');
    if (event.target.text === 'Manage') {
      Meteor.call('checkCa', function(err, res) {
        if (err) console.log(err)
        if (res === true) {
          $('#button_createca').addClass('hidden');
          $('#cainfo_table').removeClass('hidden');
        }
      });
    }
  }
});
