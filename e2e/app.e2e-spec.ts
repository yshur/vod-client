import { VodClientPage } from './app.po';

describe('vod-client App', () => {
  let page: VodClientPage;

  beforeEach(() => {
    page = new VodClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
