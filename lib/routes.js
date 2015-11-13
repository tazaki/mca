Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('calist');
}, {
  name: 'home',
  waitOn: function () {
    return Meteor.subscribe('cas');
  },
  onBeforeAction: function () {
    if (Cas.find().count() > 0) {
      this.next();
    }
    else{
      Router.go('createca');
    }
  }
});

Router.route('/calist', function () {
  this.render('calist');
});

Router.route('/createca', function () {
  this.render('createca');
});

Router.route('/cas/:_id', function () {
  this.render('showca', {
    data: function () {
      return Cas.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'cas.show'
});

Router.route('/keypairs/:_id', function () {
  this.render('keypair', {
    data: function () {
      return Keypairs.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'keypairs.show'
});

Router.route('/keypairlist', function () {
  this.render('keypairlist');
});
