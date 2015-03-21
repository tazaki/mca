Meteor.methods({
  createCa: function (cn, email, locale_name, org_name, state, country, expires) {
    rtn_data = [];
    tempData = {
      cn: cn,
      email: email,
      locale_name: locale_name,
      org_name: org_name,
      state: state,
      country: country,
      mca_root_path: mca_root_path
    };

    var fs = Npm.require('fs');
    var writef = function (file, data, callback) {
      fs.writeFile(file, data, function(err) {
        if(err) {
          return console.log(err);
        }
        callback("Created " + file);
      });
    }

    // openssl.conf
    writeTemplate('templates/openssl.conf.hb', tempData, mca_root_path + '/openssl.cnf', function (data) {
      rtn_data.push(data);
    });

    //touch index.txt
    writef(mca_root_path + "/index.txt",'', function(data) {
      rtn_data.push(data);
    });
    // echo '01' > serial
    writef(mca_root_path + "/serial",'01', function(data) {
      rtn_data.push(data);
    });
    // echo '01' > crlnumber
    writef(mca_root_path + "/crlnumber",'01', function(data) {
      rtn_data.push(data);
    });

    var cmd = 'openssl';

    var args = [
      'genrsa',
      '-out',
      mca_root_path + '/cakey.pem',
      '2048'
    ];

    Future = Npm.require('fibers/future');
    var mf = new Future();
    var output = '';

    runCmd(cmd, args, function (err, res) {
      if (err) throw err;
      rtn_data.push('Ran command: ' + cmd + ' ' + args.join(' '));

      args = [
        'req','-new','-x509',
        '-days','3650',
        '-key', mca_root_path + '/cakey.pem',
        '-out', mca_root_path + '/cacrt.pem',
        '-config',mca_root_path + '/openssl.cnf'
      ];

      runCmd(cmd, args, function (err, res) {
        if (err) throw err;
        rtn_data.push('Ran command: ' + cmd + ' ' + args.join(' '));
        return mf.return(rtn_data);
      });
    });
    return mf.wait();
  }

});
