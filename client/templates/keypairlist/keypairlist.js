Meteor.subscribe("keypairs");

Template.keypairlist.helpers({
  settings: function () {
    return {
      collection: Keypairs.find({caId: this._id}),
      rowsPerPage: 10,
      showFilter: true,
      fields: [
        { key: 'cn', label: 'Common Name' },
        { key: 'created', label: 'Created', tmpl: Template.kpcreatedtemp },
        { key: 'expires', label: 'Expires', tmpl: Template.kpexpiredtemp },
        { key: null, label: 'Downloads', tmpl: Template.kpbuttons}
      ]
    };
  }
});

Template.keypairlist.events({
  "click tbody tr": function (event) {
    Router.go('keypairs.show', {_id: this._id});
  }
});
