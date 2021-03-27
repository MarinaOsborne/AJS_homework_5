import puppetteer from 'puppeteer';

jest.setTimeout(30000);

describe('form cheked', () => {
  let browser = null;
  let page = null;
  const server = null;
  const baseUrl = 'http://localhost:9000/src';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('form test', async () => {
    await page.goto(baseUrl);
    const form = await page.$('form');
    const button = await form.$('button');
    const input = await form.$('input');
    await input.type('fyxfxgyfy');
    await button.click();
    const result = await page.evaluate(() => document.querySelector('.form-error').textContent);
    await expect(result).toBe('And here is some amazing content. It is very engaging. Right?');
  });
});
