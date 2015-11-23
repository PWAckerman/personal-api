var controller = require('./mainctrl.js')
var exports = module.exports = {};
var counter = controller.skills.length;
var user = "116487";
var pin = "112233"
exports.addHeaders = function(req, res, next){

  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  });
  next();
}

exports.addId = function(req, res, next){
  req.body.id = ++counter;
  next();
}

exports.verifyUser = function(req, res, next){
  if(req.params.username === user && req.params.pin === pin){
    next();
  } else {
    res.json("I don't think so.");
  }
}
