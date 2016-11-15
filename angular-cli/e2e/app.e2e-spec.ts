import { MemoPage } from './app.po';

describe('memo App', function() {
  let page: MemoPage;

  beforeEach(() => {
    page = new MemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
