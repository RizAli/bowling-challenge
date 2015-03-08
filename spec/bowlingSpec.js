describe('Game', function(){

  var scores = [5, 3, 8, 3, 4 , 6, 2, 3, 8, 10];

  beforeEach(function(){
    game = new Game(scores);
  });

  it('starts with a score zero', function(){
    expect(game.score).toEqual(0);
  });

  it('starts with a blank score_card', function(){
    expect(game.scoreCard).toEqual(0);
  });

  it('scores 10 for a strike', function(){
    expect(game.score).toEqual(0);
    game.strike();
    expect(game.score).toEqual(10);
  });

  it('receives an array and returns sum of it', function(){
    expect(game.total()).toEqual(52);
  });

});
