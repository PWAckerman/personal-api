var name = {"name":"Patrick Ackerman"};
var location = {"location":"Dallas"};
var occupation = {"occupations":["Receiving Operations Coordinator", "Web Developer"]};
var latestOccupation = occupation["occupations"][occupation["occupations"].length - 1]
var hobbies = { hobbies: [{
                  "name": "Saving the world",
                  "type": "current"
                  },
                  {
                  "name": "Playing Video Games",
                  "type": "past"
                  }
                ]
              }
var hobbiesResults = [];

var exports = module.exports = {};

exports.skills = [
  {
    "id": 1,
    "name": "Javascript",
    "experience": "Intermediate"
  },
  {
    "id": 2,
    "name": "PHP",
    "experience": "Beginner"
  },
  {
    "id": 3,
    "name": "English",
    "experience": "Advanced"
  }
]

exports.getSkills = (req, res) => {
  var skillz = [];
  if(req.query.experience){
    for(var i = 0; i < exports.skills.length; i++){
      if(exports.skills[i].experience === req.query.experience){
        skillz.push(exports.skills[i])
      }
    }
    res.json(skillz);
  } else {
    res.json(exports.skills);
  }
}

exports.addSkill = (req, res) => {
  var skill = req.body;
  exports.skills.push(req.body);
  res.json(true);
}

exports.getName = (req, res) => res.json(name);

exports.getLocation = (req, res) => res.json(location);

exports.getOccupation = (req, res) => {
  console.log(req.query.order)
  if(req.query.order){
    if(req.query.order === 'desc'){
      console.log('desc!')
      res.json(occupation.occupations.sort());
    }
    if(req.query.order === 'asc'){
      console.log('asc!')
      res.json(occupation.occupations.reverse());
    }
  } else {
    res.json(occupation)
  }
};

exports.getLatestOccupation = (req, res) => res.json(latestOccupation);

exports.getHobbies = (req, res) => {
  console.log(req.params.type);
  if(!req.params.type){
    res.json(hobbies)
  } else {
  for(var i = 0; i < hobbies.hobbies.length; i++){
    console.log(req.params.type);
    console.log(hobbies.hobbies[i]["type"])
  if(hobbies.hobbies[i]["type"] === req.params.type){
      hobbiesResults.push(hobbies.hobbies[i]);
    }
  }
  res.json(hobbiesResults)
  hobbiesResults = [];
  }
}

exports.editName = (req, res) => {
  name.name = req.body.name;
    res.json(true);
  }


exports.editLocation = (req, res) => {
  location = req.body.location;
  res.json(true);
}

exports.addHobbies = (req, res) => {
  var hobby = req.body;
  hobbies.hobbies.push(hobby);
  res.json(true);
}

exports.addOccupations = (req, res) => {
  var newOccupation = req.body;
  occupation.occupations.push(newOccupation);
  res.json(true);
}

exports.getSecret = (req, res) => {
  res.json('You happy now?');
}
