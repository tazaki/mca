Meteor.methods({
  createCa: function (cn, email, locale_name, org_name, state, country) {
    tempData = {
      cn: cn,
      email: email,
      locale_name: locale_name,
      org_name: org_name,
      state: state,
      country: country
    };

    writeTemplate('templates/openssl.conf.hb', tempData, '/tmp/openssl.cnf');

    //touch index.txt

    // echo '01' > serial
    // echo '01' > crlnumber

    return 'ran';

/*
    Commands:
    // Generate ca private key
    openssl genrsa -config openssl.cnf -out root-ca.key 2048

    // Self sign ca
    openssl req -new -x509 -days 3650 -key root-ca.key -out root-ca.crt -config openssl.cnf

    // Make a key and crl for new keypair
    openssl req -config openssl.cnf -new -nodes -keyout test1.key -out test1.csr -days 365

    // Sign and create crl for new keypair
    openssl ca -batch -config openssl.cnf -policy policy_anything -out test1.crt -infiles test1.csr


    console.log('Creating files and directories for ca.');
    createBaseFiles(function (data) {
      console.log(data);
    });
*/
    // Add ca to database
    //Meteor.call('addCa', cn, email, locale_name, org_name, state, country);

    // Run commands to create ca pub/key
/*

    Future = Npm.require('fibers/future');
    var mf = new Future();

    //var cmd = 'ping';
    //var args = ['-c','1','127.0.0.1']

    runCmd(cmd, args, function (err, res) {
      if (err) mf.throw(err);
      mf.return(res);
    });
    //createBaseFiles();

    return mf.wait();
*/

  }

});
