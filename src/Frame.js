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
    // alert(this.secondRollScore);
};

Frame.prototype.score = function(firstRollScore,secondRollScore){
  this.totalScore = firstRollScore + secondRollScore;

};