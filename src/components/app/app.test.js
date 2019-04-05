import puppeteer from 'puppeteer';

describe('e2e tests', () => {
    test('h1 displays correctly', async () => {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        await page.goto('http://localhost:3001/search=action&filter=genre');

        const a = await page.evaluate(() => {
            return document.querySelector('h2').innerText
        });

        expect(a).toEqual('FIND YOUR MOVIE')
    });

    test('displays movies', async () => {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        await page.setRequestInterception(true);

        page.on('request', request => {
            if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet')
                request.abort();
            else
                request.continue();
        });

        await page.goto('http://localhost:3001/search=action&filter=genre');
        await page.waitForSelector('.movies-list-item');

        const a = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.movies-list-item')).length
        });

        expect(a).toBeGreaterThan(5)
    });

    test('fetches movies by url', async () => {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();
        await page.setRequestInterception(true);

        let a = false;
        page.on('request', request => {
            if (request.url() === 'https://reactjs-cdp.herokuapp.com/movies') {
                a = true;
                request.continue()
            } else if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet')
                request.abort();
            else
                request.continue();
        });

        await page.goto('http://localhost:3001/search=action&filter=genre');

        expect(a).toEqual(true)

    });

    // test('show movie by link', async () => {
    //     const browser = await puppeteer.launch({ headless: false });
    //
    //     const page = await browser.newPage();
    //     await page.setRequestInterception(true);
    //
    //     page.on('request', request => {
    //         if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet')
    //             request.abort();
    //         else
    //             request.continue();
    //     });
    //
    //     await page.goto('http://localhost:3001/movies/287947');
    //
    //     await page.waitForSelector('.movies-details');
    //
    //     const a = await page.evaluate(() => {
    //         return document.querySelectorAll('h3').innerText
    //     });
    //
    //     expect(a).toEqual('Shazam!')
    // })
});