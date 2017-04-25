import { RuntimeConfigPage } from './app.po';

describe('runtime-config App', () => {
  let page: RuntimeConfigPage;

  beforeEach(() => {
    page = new RuntimeConfigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
