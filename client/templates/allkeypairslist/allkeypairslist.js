Meteor.subscribe("cas");
Meteor.subscribe("keypairs");

Template.allkeypairslist.helpers({
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
        { key: 'username', label: 'Created By', tmpl: Template.kpcreatedby },
        { key: 'caname', label: 'CA', tmpl: Template.kpca },
        { key: 'expires', label: 'Expires', tmpl: Template.kpexpiredtemp },
        { key: null, label: 'Downloads', tmpl: Template.kpdownloads },
        { key: null, label: 'Actions', tmpl: Template.kpactions }
      ]
    };
  }
});

Template.allkeypairslist.events({
  'click .button_download_kpcert': function (event) {
    return false;
    //window.location.href = 'keypaircert/' + this._id;
  },
  'click .button_download_kpkey': function (event) {
    return false;
    //window.location.href = 'keypairkey/' + this._id;
  },
  'click .button_kp_delete': function (event) {
    return false;
    //window.location.href = 'keypairkey/' + this._id;
  },
  'click .button_kp_renew': function (event) {
    return false;
    //window.location.href = 'keypaircert/' + this._id;
  },
  "click tbody tr": function (event) {
    Router.go('keypairs.show', {_id: this._id});
  }
});
