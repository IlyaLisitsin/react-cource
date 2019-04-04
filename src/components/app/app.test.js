import puppeteer from 'puppeteer';

test('h1 displays correctly', async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('http://localhost:3001/');

    page.evaluate(() => {
        expect(document.querySelector('h2')).toEqual('FIND YOUR MOVIE')
    })
});