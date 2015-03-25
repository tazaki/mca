var hb = Meteor.npmRequire('handlebars');
var fs = Npm.require('fs');

writeTemplate = function (template_file, data, dest_file, callback) {
  var template = hb.compile(Assets.getText(template_file));
  var result = template(data);
  fs.writeFile(dest_file, result, function(err) {
    if(err) return (err);
    return callback("Created file: " + dest_file);
  });
}
