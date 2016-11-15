describe("Suite - 중첩 형태의 describe를 사용", function() {
  var num: number;

  beforeEach(function() {
    num = 0;
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
  });

  describe("Suite - describe 내부에 정의된 중첩 describe", function() {
    var num2: number;

    beforeEach(function() {
      num2 = 1;
    });

    it("spec - 상위 describe 영역 내에 정의된 변수 num와 num2가 동일한지를 검사", function() {
      expect(num).toEqual(num2);
    });
  });
});