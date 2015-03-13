Template.layout.events({
  "click .navbar li": function (event) {
    $("li").removeClass("active");
    $(event.target.parentElement).addClass('active');
  }
});
