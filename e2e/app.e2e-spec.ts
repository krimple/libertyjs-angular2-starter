import { WorkshopDemoPage } from './app.po';

describe('workshop-demo App', function() {
  let page: WorkshopDemoPage;

  beforeEach(() => {
    page = new WorkshopDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
