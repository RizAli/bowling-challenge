var Frame = function (){
  this.totalScore = 0;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
};

Frame.prototype.receiveFirstRoll = function(pinsQty){
  this.totalScore = pinsQty
  this.firstRollScore += pinsQty
};

Frame.prototype.receiveSecondRoll = function(pinsQty) {
    this.totalScore = pinsQty
    this.secondRollScore += pinsQty
};