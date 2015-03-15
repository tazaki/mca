Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('manage', {
    path: '/manage'
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
