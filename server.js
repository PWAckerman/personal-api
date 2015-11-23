var express = require('express');
var mainCtrl = require('./controllers/mainCtrl.js');
var bodyParser = require('body-parser');
var cors = require('cors');
var middleware = require('./controllers/middleware.js');
var app = express();
var port = 9001;
console.log('we did it');
app.use(bodyParser.json())
  .use(cors())
  .get('/name', mainCtrl.getName)
  .get('/location', mainCtrl.getLocation)
  .get('/occupation?', mainCtrl.getOccupation)
  .get('/occupation/latest', mainCtrl.getLatestOccupation)
  .get('/hobbies', mainCtrl.getHobbies)
  .get('/hobbies/:type', mainCtrl.getHobbies)
  .get('/skills', mainCtrl.getSkills)
  .post('/skills', middleware.addId, mainCtrl.addSkill)
  .put('/name', mainCtrl.editName)
  .put('/location', mainCtrl.editLocation)
  .post('/hobbies', mainCtrl.addHobbies)
  .post('/occupations', mainCtrl.addOccupations)
  .get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecret)
  .listen(port, (e) => e ? console.log(e) : console.log(`listening on ${port}`));
