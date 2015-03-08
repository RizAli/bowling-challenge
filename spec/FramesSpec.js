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

  it('can udpate the score when it receives rolls', function(){
    frame.score(4,5);
    expect(frame.totalScore).toEqual(9);
    // expect(frame.Score(4,5)).toEqual(9);
  });



});