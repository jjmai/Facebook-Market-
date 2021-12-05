import puppeteer from 'puppeteer';

describe('test Home page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it('contains the header', async () => {
    await page.goto('http://localhost:3000');
    const text = await page.$eval('h2', (e) => e.textContent);
    expect(text).toBe('facebook');
  });

  it('click all category button', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('div[data-testid="all_category"]');
    await page.click('div[data-testid="all_category"]');

    const style = await page.$eval('div[data-testid="drawer"] > div',
      (el) => el.style);
    expect(style).not.toContain('visibility');
  });

  it('to login page', async () => {
    await page.goto('http://localhost:3000');
    await page.click('a[href="/login"]');
    await page.waitForSelector('h2');
    const text = await page.$eval('h2', (e) => e.textContent);
    expect(text).toBe('Facebook');
  });


  afterAll(() => browser.close());
});
