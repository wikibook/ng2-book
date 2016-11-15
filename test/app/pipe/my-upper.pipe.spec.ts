import { MyUpperPipe } from './my-upper.pipe';

describe('Suite - MyUpperPipe 테스트', () => {

  let pipe = new MyUpperPipe();

  it('spec - "abc" -> "ABC"', () => {
    expect(pipe.transform('abc')).toBe('ABC');
  });

  it('spec - "abc-def" -> "ABC-DEF"', () => {
    expect(pipe.transform('abc-def')).toBe('ABC-DEF');
  });
  
});