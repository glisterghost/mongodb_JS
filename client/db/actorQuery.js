var MongoClient = require('mongodb').MongoClient;

var ActorQuery = function(){
  this.url = 'mongodb://localhost:27017/ratings_site'
};

//this ALL is calling back information from the database
ActorQuery.prototype = {
  all: function(onQueryFinished){
   MongoClient.connect(this.url, function(err, db){
     var collection = db.collection('korean_actors');
     collection.find().toArray(function(err, docs){
      onQueryFinished(docs);
     });
    });
  },

  add: function(actorToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if (db){
        var collection = db.collection('korean_actors');
        collection.insert(actorToAdd);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        })
      }
    });
  }
};

module.exports = ActorQuery;