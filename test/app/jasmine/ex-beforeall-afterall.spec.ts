describe("Suite - beforeAll와 afterAll을 사용", function() {
  var num: number;

  beforeAll(function() {
    num = 1;
  });

  afterAll(function() {
    num = 0;
  });

  it("spec - 변수 num이 1인지", function() {
    expect(num).toEqual(1);
    num += 1;
  });

  it("spec - 변수 num이 2인지", function() {
    expect(num).toEqual(2);
  });
});
