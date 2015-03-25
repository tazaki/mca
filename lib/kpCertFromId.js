kpCertFromId = function(id) {
  return Keypairs.findOne({ _id: id }).cert;
}
