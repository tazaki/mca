Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('showkeypairs', {
    path: '/',
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
  this.route('cainfo' , {
    path: '/cainfo'
  });
  this.route('createca', {
    path: '/cainfo/createca'
  });
  this.route('creatingca', {
    path: '/cainfo/creatingca'
  });
  this.route('/cacert/:id', getCaCert, {where: 'server'});
  this.route('/keypaircert/:id', getKpCert, {where: 'server'});
  this.route('/keypairkey/:id', getKpKey, {where: 'server'});
});
