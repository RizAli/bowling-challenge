describe ('Frame', function (){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("has totalScore Zero at start", function(){
    expect(frame.totalScore).toEqual(0);
  });



});