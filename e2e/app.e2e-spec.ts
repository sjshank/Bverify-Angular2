import { BverifyAngular2Page } from './app.po';

describe('bverify-angular2 App', function() {
  let page: BverifyAngular2Page;

  beforeEach(() => {
    page = new BverifyAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
