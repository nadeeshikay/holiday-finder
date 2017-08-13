import { HolidayFinderPage } from './app.po';

describe('holiday-finder App', function() {
  let page: HolidayFinderPage;

  beforeEach(() => {
    page = new HolidayFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
