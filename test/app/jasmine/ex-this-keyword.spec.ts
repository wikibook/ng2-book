describe("Suite - this 키워드에 대한 테스트", function() {
  beforeEach(function() {
    this.num = 0;
  });

  it("spec - 변수 num이 0인지", function() {
    expect(this.num).toEqual(0);
    this.message = "hello";
  });

  it("spec - 변수 num이 0이고 this.message 변수가 정의되지 않았는지", function() {
    expect(this.num).toEqual(0);
    expect(this.message).toBe(undefined);
  });
});