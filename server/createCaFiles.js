var fs = Npm.require('fs');

createBaseFiles = function () {

  console.log('hi');

  var root_dir = '/opt/mca';

  fs.mkdir(root_dir, function (ex) {
    if (ex) {
      console.log(ex);
    } else {
      console.log("Created directory: " + root_dir);
    }
  });

}
