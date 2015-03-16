Template.showkeypairs.helpers({
  cainfo: function () {
    console.log(Cas.find());
    return Cas.findOne();
  },
  keypairs: function () {
    //console.log(Keypairs.findOne());
    return Keypairs.find();
  }
  /*
  [
    {
      'cn': 'testcert1',
      'created': new Date(),
      'expires': new Date()
    },
    {
      'cn': 'testcert2',
      'created': new Date(),
      'expires': new Date()
    },
    {
      'cn': 'testcert3',
      'created': new Date(),
      'expires': new Date()
    },
    {
      'cn': 'testcert4',
      'created': new Date(),
      'expires': new Date()
    },
    {
      'cn': 'testcert5',
      'created': new Date(),
      'expires': new Date()
    },
    {
      'cn': 'testcert6',
      'created': new Date(),
      'expires': new Date()
    }
  ]
  */
});
