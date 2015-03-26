mca_root_path = '';

getUserHome = function() {
  return process.env.HOME;
}

Meteor.startup(function () {
  user_home = getUserHome();
  mca_root_path = user_home + '/cafiles';

  var fs = Npm.require('fs');

  if (!fs.existsSync(mca_root_path)){
    console.log("Making directory: " + mca_root_path);
    fs.mkdirSync(mca_root_path);
  }

});
