import { TestPackagePage } from './app.po';

describe('test-package App', () => {
  let page: TestPackagePage;

  beforeEach(() => {
    page = new TestPackagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
