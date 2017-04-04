var Actors = require('../models/actors');

var UI = function() {
  var actors = new Actors();
  // you are using the ALL from the actors.js which is the all from the browser
  actors.all(function(result){
    this.render(result);
  }.bind(this));
this.createForm();
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(actors) {
    var container = document.getElementById('actors');

    for (var actor of actors) {
      var li = document.createElement('li');
      this.appendText(li, actor.name, 'Name: ');
      this.appendText(li, actor.age, 'Age: ');
      this.appendText(li, actor.dob, 'DOB: ');
      this.appendText(li, actor.tv_shows, "TV Shows: ");
      this.appendText(li, actor.films, "Films: ");
      this.appendText(li, actor.rating, "Rating: ");
      
      container.appendChild(li);
    }
  },
  createForm: function(){  //ADDED
       //create the form and a div
       var div = document.createElement('div');
       var form = document.createElement('form');
       var body = document.querySelector('body');
     
       //append input boxes to the form
       var nameInput = document.createElement('input');
       nameInput.setAttribute("name", "name");
       form.appendChild(nameInput);
     
       var ageInput = document.createElement('input');
       ageInput.setAttribute("name", "age");
       form.appendChild(ageInput);
     
       var dobInput = document.createElement('input');
       dobInput.setAttribute("name", "dob");
       form.appendChild(dobInput);

       var tv_showsInput = document.createElement('input');
       tv_showsInput.setAttribute("name", "TV Shows");
       form.appendChild(tv_showsInput);

      var filmsInput = document.createElement('input');
      filmsInput.setAttribute("name", "films");
      form.appendChild(filmsInput);

      var ratingsInput = document.createElement('input');
      ratingsInput.setAttribute("name", "ratings");
      form.appendChild(ratingsInput);
     
       //append a button to submit the form
       var button = document.createElement('button');
       button.type = 'submit';
       button.innerText = 'Add Actor';
       form.appendChild(button);
     
       //add event handler to the onSubmit event of the form
       form.onsubmit = function(e){
         e.preventDefault();
         var newActor = {
           name: e.target.name.value,
           age: e.target.age.value,
           dob: e.target.dob.value,
           tv_shows: e.target.tv_shows.value.split(','),
           films: e.target.films.value.split(','),
           ratings: e.target.ratings.value,
         }
     
         var actors = new Actors();
         actors.add(newActor, function(data){
           console.log(data);
         });
     
       }
     
       div.appendChild(form);
       body.insertBefore( div, body.firstChild );
     }
}

module.exports = UI;