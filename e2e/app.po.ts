import { browser, by, element } from 'protractor';

export class IdleProtractorExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  clickToChangeText() {
    element(by.id('btnTest')).click();
  }
}
