kpKeyFromId = function(id) {
  return Keypairs.findOne({ _id: id }).key;
}
