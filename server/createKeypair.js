Meteor.methods({
  createKeypair: function (cn, ca_email, ca_locale_name, ca_org_name, ca_state, ca_country) {
    var rtn_data = [];

    certData = {
      cn: cn,
      email: ca_email,
      locale_name: ca_locale_name,
      org_name: ca_org_name,
      state: ca_state,
      country: ca_country,
      mca_root_path: mca_root_path
    };

    Future = Npm.require('fibers/future');
    var mf = new Future();

    // Create dir for keypair
    var fs = Npm.require('fs');
    fs.mkdirSync(mca_root_path + '/' + cn);
    console.log("Created directory: " + mca_root_path + '/' + cn)

    // Create openssl.conf in keypair dir
    var kp_path = mca_root_path + '/' + cn
    var openssl_conf_path = kp_path + '/openssl.cnf'

    writeTemplate('templates/openssl.conf.hb', certData, openssl_conf_path, function (data) {
      console.log("Created file: " + openssl_conf_path)
      rtn_data.push(data);

      // Create key for keypair
      var cmd = 'openssl';
      var args = [
        'genrsa',
        '-out',
        kp_path + '/key.pem',
        '2048'
      ];

      runCmd(cmd, args, function (err1, res1) {
        if (err1) throw err1;
        rtn_data.push('Ran command: ' + cmd + ' ' + args.join(' '));

        // Create csr for keypair
        // openssl req -config openssl.cnf -new -nodes -keyout test1.key -out test1.csr -days 365
        args = [
          'req',
          '-config', kp_path + '/openssl.cnf',
          '-new', '-nodes',
          '-keyout', kp_path + '/key.pem',
          '-out', kp_path + '/csr.pem',
          '-days', '365'
        ];
        runCmd(cmd, args, function (err2, res2) {
          if (err2) throw err2;
          rtn_data.push('Ran command: ' + cmd + ' ' + args.join(' '));

          // Sign crl/create crt for keypair
          // openssl ca -batch -config openssl.cnf -policy policy_anything -out test1.crt -infiles test1.csr
          args = [
            'ca', '-batch',
            '-config', mca_root_path + '/openssl.cnf',
            '-policy', 'policy_anything',
            '-out', kp_path + '/crt.pem',
            '-infiles', kp_path + '/csr.pem'
          ];

          runCmd(cmd, args, function (err3, res3) {
            if (err3) throw err3;
            rtn_data.push('Ran command: ' + cmd + ' ' + args.join(' '));
            return mf.return(rtn_data);
          });
        });
      });
    });

    return mf.wait();
  }
});
