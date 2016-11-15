describe("Suite - beforeEach 와 afterEach가 제대로 동작하는지를 검사", function() {
  var num = 0;

  beforeEach(function() {
    num += 1;    
  });

  afterEach(function() {
    num = 0;    
  });

  it("spec - 검사할 대상이 1개", function() {    
    expect(num).toEqual(1);
  });

  it("spec - 검사할 대상이 1개 이상", function() {    
    expect(num).toEqual(1);
    expect(true).toEqual(true);
    expect(null).toBeNull();
    expect('green').toBe('green', 'blue');
  });
});