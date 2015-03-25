getKpKey = function() {
  //console.log(fileFromId(this.params.id));
  //var file = fileFromId(this.params.id);

  var file = '/opt/cafiles/cacrt.pem'
  var fs = Npm.require('fs');

  // Attempt to read the file size
  var stat = null;
  try {
    stat = fs.statSync(file);
  } catch (_error) {
    return fail(this.response);
  }

  // The hard-coded attachment filename
  var attachmentFilename = 'cacert.pem';

  // Set the headers
  this.response.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-Disposition': 'attachment; filename=' + attachmentFilename,
    'Content-Length': stat.size
  });

  // Pipe the file contents to the response
  fs.createReadStream(file).pipe(this.response);
}
