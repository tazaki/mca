Template.showkeypair.events({
  "click .ca-info-button": function (event) {
    Router.go('cas.show', {_id: this.caId});
  }
});
