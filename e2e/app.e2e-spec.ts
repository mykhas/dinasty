import { DinastyPage } from './app.po';

describe('dinasty App', function() {
  let page: DinastyPage;

  beforeEach(() => {
    page = new DinastyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
