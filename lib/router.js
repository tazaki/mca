Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('showkeypairs', {
    path: '/',
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
