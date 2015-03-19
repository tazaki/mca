var hb = Meteor.npmRequire('handlebars');
var fs = Npm.require('fs');

writeTemplate = function (template_file, data, dest_file) {
  var template = hb.compile(Assets.getText(template_file));
  var result = template(data);
  fs.writeFileSync(dest_file, result);
}
