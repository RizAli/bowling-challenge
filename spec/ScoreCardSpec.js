describe('ScoreCard', function() {
  var scoreCard;
});

beforeEach(function(){
  scoreCard = new ScoreCard();
});

it("can have a frame", function(){
  expect(scoreCard.frames).toEqual([]);
});

it('starts game with 10 frames', function(){
  scoreCard.startGame();
  expect(scoreCard.frames.length).toEqual(10);
});








