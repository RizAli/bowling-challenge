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


  // it("should have 10 frames", function() {
  //   expect(game.scoreCard.frames.length).toEqual(10);
  // });



  // it("Should correctly score games with no spares or strikes", function() {
  //   var rolls1 = [9,0, 3,5, 0,0, 4,2, 5,0, 2,3, 6,3, 1,2, 7,1, 3,4]; // 60
  //   Test.assertEquals(calculateScore(rolls1), 60);
  // })

  // it("Should correctly score games with spares before the last turn", function() {
  //   var rolls2 = [9,"/", 3,5, 0,"/", 4,2, 5,0, 2,"/", 6,3, 1,2, 7,"/", 3,4]; // 94
  //   Test.assertEquals(calculateScore(rolls2), 94);
  // })

  // it("Should correctly score games with strikes before the last turn", function() {
  //   var rolls3 = [9,0, "X", 0,0, 4,2, "X", 2,3, 6,3, 1,2, "X", 3,4]; // 81
  //   Test.assertEquals(calculateScore(rolls3), 81);
  // })

  // it("Should correctly score games with strikes and spares", function() {
  //   var rolls4 = [9,"/", 3,5, 0,0, "X", 5,0, 2,3, 6,3, 1,2, 7,1, "X","X","X"]; // 96
  //   var rolls5 = [3,1, "X", 1,2, 0,9, 3,"/", 0,0, 1,4, 5,3, 0,2, 6,"/",8]; // 72
  //   var rolls6 = [2,1, 8,1, 3,5, "X", 2,6, 5,1, 4,5, 1,3, 5,1, "X",6,"/"]; // 91
  //   Test.assertEquals(calculateScore(rolls4), 96);
  //   Test.assertEquals(calculateScore(rolls5), 72);
  //   Test.assertEquals(calculateScore(rolls6), 91);
  // })

});
