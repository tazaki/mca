Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('createca', {
    path: '/manage/createca'
  });
  this.route('creatingca', {
    path: '/manage/creatingca'
  });
  this.route('showkeypair', {
    path: '/showkeypair/:_id'
  });
});

Router.route('/manage', {
  template: 'manage',
  data: function () {
    return Cas.findOne();
  },
});
