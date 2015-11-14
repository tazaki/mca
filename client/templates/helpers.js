Template.registerHelper('toMomentTFN', function(date) {
  return moment(date).fromNow();
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
