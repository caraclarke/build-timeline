import { BuildTimelinePage } from './app.po';

describe('build-timeline App', () => {
  let page: BuildTimelinePage;

  beforeEach(() => {
    page = new BuildTimelinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
