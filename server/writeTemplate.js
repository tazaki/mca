var hb = Meteor.npmRequire('handlebars');
var fs = Npm.require('fs');

writeTemplate = function () {
  fs.readFile(Assets.getText("templates/openssl.conf.hb"), 'utf8', function (err,content) {
    if (err) {
      return console.log(err);
    }
    console.log(content);
    var template = hb.compile(content);
    var data = { "name": "Alan", "hometown": "Somewhere, TX",
               "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    var result = template(data);
    console.log(result);
  });

}
