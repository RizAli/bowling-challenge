var Frame = function (){
  this.totalScore = 0;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
};

Frame.prototype.receiveFirstRoll = function(pinsQty){
  this.firstRollScore += pinsQty
};

Frame.prototype.receiveSecondRoll = function(pinsQty) {
    this.secondRollScore += pinsQty
    };

Frame.prototype.score = function(firstRollScore,secondRollScore){
  this.totalScore = firstRollScore + secondRollScore;
};

Frame.prototype.strike= function(){
  this.firstRollScore = 10;
};

Frame.prototype.spare = function(){
  this.totalScore = this.firstRollScore + this.secondRollScore;
};