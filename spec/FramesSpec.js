describe ('Frame', function (){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("has Score Zero at start", function(){
    expect(frame.totalScore).toEqual(0);
  });

  it('takes first roll for a frame', function(){
    frame.receiveFirstRoll(5);
    expect(frame.firstRollScore).toEqual(5);
  });

  it("updates firstRollScore based on the pins dropped", function(){
    frame.receiveFirstRoll(4);
    expect(frame.firstRollScore).toEqual(4);
  });

  it('takes second roll for a frame', function(){
    frame.receiveSecondRoll(4);
    expect(frame.secondRollScore).toEqual(4);
  });

  it('can udpate the score when it receives rolls for the values below ten', function(){
    frame.score(4,5);
    expect(frame.totalScore).toEqual(9);
  });

   it('knows if it is a strike which means all 10 pins dropped', function(){
    frame.strike();
    expect(frame.firstRollScore).toEqual(10);
  });

   it('knows if it is a spare which means roll1 + roll2 = 10 pins dropped', function(){
    frame.receiveFirstRoll(5);
    frame.receiveSecondRoll(5);
    frame.score(5,5)
    frame.spare();
    expect(frame.totalScore).toEqual(10);
  });


   it("can set the roll 2 to zero if the roll one is a strike", function(){
    frame.score(10,5)
    // expect(frame.totalScore).toEqual(10);
   });





});