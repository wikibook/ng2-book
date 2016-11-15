describe("Suite - true/false 값을 검사", function() {
  var a: boolean;

  it("spec - true 값인지", function() {
    a = true;
    expect(a).toBe(true);
  });

  it("spec - false 값이 아닌지", function() {
    a = true;
    expect(a).not.toBe(false);
  });

});
