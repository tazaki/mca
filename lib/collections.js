Cas = new FS.Collection("CaFiles", {
  stores: [new FS.Store.GridFS("CaFiles")]
});

Cas.allow({
  insert:function(){return true;},
  remove:function(){return true;},
  update:function(){return true;},
  download:function(){return true;}
});

Keypairs = new FS.Collection("KeyPairs", {
  stores: [new FS.Store.GridFS("KeyPairFiles")]
});

Keypairs.allow({
  insert:function(){return true;},
  remove:function(){return true;},
  update:function(){return true;},
  download:function(){return true;}
});
