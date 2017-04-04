db.dropDatabase();

use korean_actors;

// db.createCollection("actors");

db.actors.insert([
   {
     name:"Lee Joon-Gi",
     age: 34,
     DOB: "17 April 1982",
     tv_shows: ["Moon Lovers: Scarlet Heart Ryeo", "Scholar Who Walks the Night", "Two Weeks"],
     films: ["May 18 ", "Resident Evil: the Final Chapter"],
     rating: 89
   },  
   {
    name:"Lee Jong-suk",
    age: 27,
    DOB: "14 September 1989",
    tv_shows: ["W", "Doctor Stranger", "Pinocchoi", "I can hear your voice"],
    films: ["Hot Young Bloods", "No Breathing", "The Face Reader"],
    rating: 82
  },
   {
    name:"Kim Woo-Bin",
    age: 27,
    DOB: "16 July 1989",
    tv_shows: ["Uncontrollably Fond", "The Heirs", "Gentleman's Dignity"],
    films: ["Master", "Twenty ", "The Con Artists"],
    rating: 86
  },
   {
    name:"Song Joong-Ki",
    age: 31,
    DOB: "19 September 1985",
    tv_shows: ["Descendants of the Sun", "The Innocent Man"],
    films: ["The Battleship Island", "A Werewolf Boy", "The Grand Heist "],
    rating: 91
  },
  {
    name:"Ji Chang-Wook",
    age: 29,
    DOB:"5 July 1987",
    tv_shows: ["Suspicious Partner", "K2", "Healer"],
    films: ["Fabricated City ","Two Policemen"],
    rating: 86
  }
  ])

db.korean_actors.find();

db.dropDatabase();