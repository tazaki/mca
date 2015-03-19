Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('createca', {
    path: '/cainfo/createca'
  });
  this.route('creatingca', {
    path: '/cainfo/creatingca'
  });
  this.route('showkeypair', {
    path: '/showkeypair/:_id'
  });
  this.route('/cainfo' , {
    template: 'cainfo',
    data: function () {
      return Cas.findOne();
    }
  });
});
