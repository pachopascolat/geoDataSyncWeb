import { ZaidmanProjectPage } from './app.po';

describe('zaidman-project App', () => {
  let page: ZaidmanProjectPage;

  beforeEach(() => {
    page = new ZaidmanProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
