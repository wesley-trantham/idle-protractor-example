import { IdleProtractorExamplePage } from './app.po';

describe('idle-protractor-example App', () => {
  let page: IdleProtractorExamplePage;

  beforeEach(() => {
    page = new IdleProtractorExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');

    page.clickToChangeText();

    expect(page.getParagraphText()).toEqual('title changed!');
  });
});
