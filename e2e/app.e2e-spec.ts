import { SnuBoostPage } from './app.po';

describe('snu-boost App', function() {
  let page: SnuBoostPage;

  beforeEach(() => {
    page = new SnuBoostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
