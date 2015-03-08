var Game = function(scores){
 this.score = 0;
 this.scoreCard = 0;
 this.scores = scores;
};

Game.prototype.score = function(){
  this.score;
};

Game.prototype.scoreCard = function(){
  this.scoreCard = 0;
};

Game.prototype.strike = function(){
  this.score = this.score + 10;
};

Game.prototype.scores = function(){
  this.scores;
};

Game.prototype.total = function(){
  var currTotal = 0;
  for(var i in this.scores) { currTotal += this.scores[i]; }
  return currTotal
};


