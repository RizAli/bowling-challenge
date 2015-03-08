describe ('Frame', function (){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("has totalScore Zero at start", function(){
    expect(frame.totalScore).toEqual(0);
  });

  it('takes first roll for a frame', function(){
    frame.receiveFirstRoll(5);
    expect(frame.totalScore).toEqual(5);
  });

  it("updates firstRollScore based on the pins dropped", function(){
    frame.receiveFirstRoll(4);
    expect(frame.firstRollScore).toEqual(4);
  });

  it('takes second roll for a frame', function(){
    frame.receiveSecondRoll(4);
    expect(frame.secondRollScore).toEqual(4)
  });





});