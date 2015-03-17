var fs = Npm.require('fs');

createBaseFiles = function () {

  var root_dir = '/opt/cafiles';

  fs.mkdirSync(root_dir + '/ca');
  fs.mkdirSync(root_dir + '/certs');

  //Create openssl.conf
  //Create index
  //Create serial
  
}
