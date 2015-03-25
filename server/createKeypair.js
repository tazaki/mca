Meteor.methods({
  createKeypair: function (cn, expires) {
    // Create dir for keypair
    var fs = Npm.require('fs');
    fs.mkdirSync(mca_root_path + '/' + cn);

    // Create openssl.conf in keypair dir
    writeTemplate('templates/openssl.conf.hb', certData, mca_root_path + cn + '/openssl.cnf', function (data) {
      rtn_data.push(data);
    });

    // Create key for keypair
    var cmd = 'openssl';
    var args = [
      'genrsa',
      '-out',
      mca_root_path + cn + '/key.pem',
      '2048'
    ];

    // Create crl for keypair
    // openssl req -config openssl.cnf -new -nodes -keyout test1.key -out test1.csr -days 365
    args = [
      'req',
      '-config', 'openssl.cnf',
      '-new', '-nodes',
      '-keyout', mca_root_path + cn + 'key.pem',
      '-out', mca_root_path + cn + 'csr.pem',
      '-days', '365'
    ];

    // Sign crl/create crt for keypair
    // openssl ca -batch -config openssl.cnf -policy policy_anything -out test1.crt -infiles test1.csr
    args = [
      'ca', '-batch',
      '-config', 'openssl.cnf',
      '-policy', 'policy_anything',
      '-out', mca_root_path + cn + 'crt.pem',
      '-infiles', mca_root_path + cn + 'csr.pem'
    ];

  }
});
