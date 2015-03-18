var hb = Meteor.npmRequire('handlebars');
var fs = Npm.require('fs');

writeTemplate = function (template_file, data) {
  var template = hb.compile(Assets.getText(template_file));
  var result = template(data);
  console.log(result);
}
