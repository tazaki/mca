kpCnFromId = function(id) {
  return Keypairs.findOne({ _id: id }).cn;
}
