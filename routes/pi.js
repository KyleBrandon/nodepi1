
/*
 * GET pi listing.
 */
var gpio = require("pi-gpio");

exports.on = function(req, res){

  gpio.write(11, 1, function(err){
    if (err){
      res.send("ERROR");
    }
  });
  res.send("ON");

};

exports.off = function(req, res){

  gpio.write(11, 0, function(err){
    if (err){
      res.send("ERROR");
    }
   });
  res.send("OFF");

};