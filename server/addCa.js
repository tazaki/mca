Meteor.methods({
  addCa: function (cn, email, locale_name, org_name, state, country, expires) {

    file_location = mca_root_path + '/cacrt.pem';
    fs = Npm.require('fs');
    file = fs.readFileSync(file_location);
    fsFile = new FS.File(file_location);
    fsFile.metadata = {
      cn: cn,
      email: email,
      localename: locale_name,
      orgname: org_name,
      state: state,
      country: country,
      expires: expires
    };

    Cas.insert(fsFile,function(err,result){
      if(!err){
        console.log('Saved file to: ' + result.collectionName);
        //console.log(result) //you should get an id here since the full object take more less 10 sec to upload
      }
    });

  },
});
