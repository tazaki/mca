Meteor.subscribe("cas");
Meteor.subscribe("keypairs");

Template.keypairlist.helpers({
  cas: function () {
    return Cas.find({});
  },
  settings: function () {
    return {
      collection: Keypairs.find({}),
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
