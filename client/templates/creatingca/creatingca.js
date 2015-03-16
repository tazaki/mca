Template.creatingca.events({
  "click button": function (event) {
    Router.go('home');
    //TODO Fix active css on navbar
    //$("li").removeClass("active");
    //$(event.target.parentElement).addClass('active');
    return false;
  }
});
