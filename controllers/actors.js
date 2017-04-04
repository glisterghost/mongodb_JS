var express = require('express');
var app = express();
var actorRouter = express.Router();

var actors = require('../client/src/models/actor');


var ActorQuery = require('../client/db/actorQuery');
var query = new ActorQuery();


//actor by id
actorRouter.get('/:id', function(req, res){
  res.json(actors[req.params.id]);
});

//actor index changed to accepted the database
actorRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  })
});

// update actor
actorRouter.put('/:id', function(req, res) {
  var actor = new Actor({
    name: req.body.name,
    age: req.body.age,
    dob: req.body.dob,
    tv_shows: req.body.tv_shows,
    films: req.body.films,
    rating: req.body.rating
  });
  actors[req.params.id] = actor;
  res.json({data: actors});
});

//add new Korean actor
actorRouter.post('/', function(req, res) {
  // console.log("adding new korean actor");

  var actor = new Actor({
    name: req.body.name,
    age: req.body.age,
    dob: req.body.dob,
    tv_shows: req.body.tv_shows,
    films: req.body.films,
    rating: req.body.rating
  });
  query.add(actor, function(results){
    // res.json(results);
  })
});

//delete actor
actorRouter.delete('/:id', function(req, res) {
  actors.splice(req.params.id, 1);
  res.json({data: actors});
});

module.exports = actors;