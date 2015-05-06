Meteor.subscribe("keypairs");
Meteor.subscribe("cas");

Template.showkeypairs.helpers({
  cainfo: function () {
    return Cas.findOne();
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

Template.showkeypairs.events({
  'click .button_download_kpcert': function (event) {
    window.location.href = 'keypaircert/' + this._id;
  },
  'click .button_download_kpkey': function (event) {
    window.location.href = 'keypairkey/' + this._id;
  },
  /*
  'mouseover .kpcreated': function (event) {
    var id = this._id;
    console.log(Keypairs.findOne(id).created);
  }
  */
});
