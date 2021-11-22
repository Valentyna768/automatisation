//without testing header, footer, widgets//
describe('Slot page', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/gokkasten/book-of-dead/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check displaying of braedcrumps//
    it('Check displaying of braedcrumps', () => {
        const breadcrumps = $('body > div > div > div > div.bfad93f > div');
        expect(breadcrumps).toBeDisplayed()
        const homeBc = $('body > div > div > div > div.bfad93f > div > p > span > span > a')
        expect(homeBc).toHaveTextContaining('Online Casino')
        expect(homeBc).toHaveAttr('href')
        expect(homeBc).toHaveLink('https://nederlandscasinos.net/')
        homeBc.click()
        const pageBc = $('body > div > div > div > div.bfad93f > div > p > span > span > strong')
        expect(pageBc).toBeDisplayed
    });
    // Test 2 Check h1//
    it('Check h1', () => {
        const titleH1 = $('body > div > div > div > div.bfad93f > main > section.bfadb1d.bfad126d > h1')
        expect(titleH1).toHaveAttr('<h1, </h1>')
    });
    // Test 3 Check raiting displaying//
    it('Check raiting displaying', () => {
        const raiting = $('body > div > div > div > div.bfad93f > main > div')
        expect(raiting).toBeDisplayed
    });
    // Test 4 Check iframe//
    it('Check iframe', () => {
        const img = $('body > div > div > div > div.bfad93f > main > section.bfadb1d.bfad90fe > div > div.bfada01 > div > div > img')
        expect(img).toHaveAttr('class="js-iframe-img wp-post-image lazyloaded", alt')
        expect(img).toBeClickable
        const iframeBtn = $('body > div > div > div > div.bfad93f > main > section.bfadb1d.bfad90fe > div > div.bfada01 > div > div > div > button')
        expect(iframeBtn).toBeDisplayed
        expect(iframeBtn).toHaveAttr('<button,')
        iframeBtn.click()
    });
    // Test 5 Check Main CTA//
    it('Check Main CTA', async () => {
        const mainCta = $('body > div > div > div > div.bfad93f > main > section.bfadb1d.bfad90fe > div > div.bfad338.bfaddee0 > button')
        expect(mainCta).toBeDisplayed
        mainCta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7226&location=https://nederlandscasinos.net/gokkasten/book-of-dead/&cid=2060352228.1637584650&element=cta_slot_page_button')
    });
    // Test 6 Displaying of API block//
    it('Displaying of API block', async () => {
        const wholeBlock = $('body > div > div > div > div.bfad93f > main > section.bfadf43d')
        expect(wholeBlock).toBeDisplayed
    });
    // Test 7 Displaying of About Money blocks and fields//
    it('Displaying of About Money block and fields', async () => {
        const firstBlock = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money')
        expect(firstBlock).toBeDisplayed
        const titleBlock1 = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > h3')
        expect(titleBlock1).toHaveAttr('<h3>, </h3>')
        const rtp = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(2)')
        expect(rtp).toBeDisplayed
        const betweys = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(3)')
        expect(betweys).toBeDisplayed
        const variance = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(4)')
        expect(variance).toBeDisplayed
        const layout = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(5)')
        expect(layout).toBeDisplayed
        const maxWin = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(6)')
        expect(maxWin).toBeDisplayed
        const minBet = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(7)')
        expect(minBet).toBeDisplayed
        const maxBet = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.overview-items-group-about-money > div:nth-child(8)')
        expect(maxBet).toBeDisplayed
    });
    // Test 8 Displaying of About Money blocks and fields//
    it('Displaying of General block and fields', async () => {
        const generalBlock = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.bfad17bf')
        expect(generalBlock).toBeDisplayed
        const titleBlock2 = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.bfad17bf > h3')
        expect(titleBlock2).toHaveAttr('<h3>, </h3>')
        const lastUpdate = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.bfad17bf > div:nth-child(2)')
        expect(lastUpdate).toBeDisplayed
        const gamesPlayed = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.bfad17bf > div:nth-child(3)')
        expect(gamesPlayed).toBeDisplayed
        const pageViews = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad2c3c > div.bfad00f.bfad17bf > div:nth-child(4)')
        expect(pageViews).toBeDisplayed  
    });
    // Test 9 Displaying of Free Games block and fields//
    it('Displaying of Free Games block and fields', async () => {
        const thirdBlock = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div')
        expect(thirdBlock).toBeDisplayed
        const titleBlock3 = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > h3')
        expect(titleBlock3).toHaveAttr('<h3>, </h3>')
        const provider = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(2)')
        expect(provider).toBeDisplayed
        const mobile = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(3)')
        expect(mobile).toBeDisplayed
        const release = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(4)')
        expect(release).toBeDisplayed
        const type = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(5)')
        expect(type).toBeDisplayed
        const theme = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(6)')
        expect(theme).toBeDisplayed
        const technology = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(7)')
        expect(technology).toBeDisplayed
        const features = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad8cc5 > div > div:nth-child(8)')
        expect(features).toBeDisplayed
    });
    // Test 10 Displaying of screenshots//
    it('Displaying of screenshots', async () => {
        const screenshotsTitle = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > h2')
        expect(screenshotsTitle).toHaveAttr('<h2, </h2>')
        const screenshot1 = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad4e02.bfad484 > div:nth-child(1) > img')
        expect(screenshot1).toBeDisplayed
        expect(screenshot1).toHaveAttr('alt')
        const screenshot2 = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad4e02.bfad484 > div:nth-child(2) > img')
        expect(screenshot2).toBeDisplayed
        expect(screenshot2).toHaveAttr('alt')
        const screenshot3 = $('body > div > div > div > div.bfad93f > main > section.bfadf43d > div > div.bfad4e02.bfad484 > div:nth-child(3) > img')
        expect(screenshot3).toBeDisplayed
        expect(screenshot3).toHaveAttr('alt')
    });
});
