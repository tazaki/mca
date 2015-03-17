var fs = Npm.require('fs');

createBaseFiles = function (callback) {

  var root_dir = '/opt/cafiles';

  console.log("Creating directory: " + root_dir + '/ca');
  fs.mkdirSync(root_dir + '/ca');
  console.log("Creating directory: " + root_dir + '/certs');
  fs.mkdirSync(root_dir + '/certs');



  //Create openssl.conf
  //Create index
  //Create serial

  return(callback('Done'));
}
