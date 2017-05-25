import { RadhaAppPage } from './app.po';

describe('radha-app App', () => {
  let page: RadhaAppPage;

  beforeEach(() => {
    page = new RadhaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
