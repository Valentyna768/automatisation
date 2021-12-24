describe('Software Page', () => {
    beforeEach(async function () {
        browser.url('https://nederlandscasinos.net/providers/betsoft/');
        browser.setWindowSize(1440, 1079);
    });
    //tests without checking header, footer and widgets//
    // Test 1  Check displaying of braedcrumps//
    it('Check displaying of breadcrumps', () => {
        const breadcrumps = $('body > div > div:nth-child(1) > div > div.bfad93f > div');
        expect(breadcrumps).toBeDisplayed()
        const homeBc = $('body > div > div:nth-child(1) > div > div.bfad93f > div > p > span > span > a')
        expect(homeBc).toHaveTextContaining('Online Casino')
        expect(homeBc).toHaveAttr('href')
        expect(homeBc).toHaveLink('https://nederlandscasinos.net/')
        homeBc.click()
        const pageBc = $('body > div > div:nth-child(1) > div > div.bfad93f > div > p > span > span > strong')
        expect(pageBc).toBeDisplayed
    });
    //Test2 Check H1//
    it('Check H1', async () => {
        const h1 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > div > h1')
        expect(h1).toBeDisplayed
    });
    // Test 3  Check casinos logo//
    it('Check casinos logo', async () => {
        const imgBlock = $('body > div > div:nth-child(1) > div > div.bfad93f > main > div > div.bfad5c9')
        expect(imgBlock).toBeDisplayed
        const image = $('body > div > div:nth-child(1) > div > div.bfad93f > main > div > div.bfad5c9 > img')
        expect(image).toBeDisplayed
        expect(image).toHaveAttr('alt="Betsoft Casino"')
    });
        // Test 3  Check description//
    it('Check description', async () => {
        const description = $('body > div > div:nth-child(1) > div > div.bfad93f > main > div > div.bfade4f > p')
        expect(description).toBeDisplayed
    });
});
        
