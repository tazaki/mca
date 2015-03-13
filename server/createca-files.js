if (Meteor.isServer) {

  Meteor.methods({
    createcafiles: function () {
      var fs = Npm.require('fs');
      fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
    }

  });

}
