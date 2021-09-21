
describe('Homepage Logo+SEO', () => {
    // Test 1 Logo displaying                    //
    it('should show  Logo', () => {
        browser.url('https://nederlandscasinos.net/');
        const mainLogo = $('/html/body/div/div/div/div[1]/header/div/span/img');
        expect(mainLogo).toBeDisplayed()
    });
    // Test 2 Check alt for logo                   //
    it('check Logo alt', () => {
        browser.url('https://nederlandscasinos.net/');
        const altLogo = $('body > div > div > div > div.bfad93f > header > div > span > img');
        expect(altLogo).toHaveAttr('alt')
    });
    // Test 3 H1 on page                  //
    it('check h1', () => {
        const h1 = $('input')
        expect(h1).toHaveAttribute('h1 class')
    });
    // Test 4 Canonical is presented                 //
    it('Canonical is presented', () => {
        const canonical = browser.$("link rel='canonical'").getAttribute('href');
    })
    // Test 5 Description is presented                 //
    it('Description is presented', () => {
        const description = browser.$('head > meta:nth-child(24)')
        expect(description).toHaveAttribute('meta')
        expect(description).toHaveTextContaining('Betrouwbare online casino 2021 voor Nederland.');
    })
    // Test 6 Title is presented                 //
    it('Title is presented', () => {
        const title = $('/html/head/title')
        expect(title).toHaveTextContaining('Online Casinos Nederland - Betrouwbare NL Goksites');
    })
    // Test 6 file Robots.txt is presented                 //
    it('Verify robots.txt', () => {
        browser.url('https://nederlandscasinos.net/robots.txt');
        const robotsTxt = $('/html/body/pre')
        expect(robotsTxt).toHaveTextContaining('User-agent', 'Disallow', 'Allow');
    })
});