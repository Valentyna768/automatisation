describe('Linking Cards third block', () => {
    beforeEach(async function () {
        browser.url('https://nederlandscasinos.net/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check displaying of Linking card block//
    it('Check displaying of Linking card block', () => {
        const LinkingCardblock = $('body > div > div > div > div.bfad93f > main > section:nth-child(11)');
        expect(LinkingCardblock).toBeDisplayed()
    });
    // Test 2 Check the title is in h2//
    it('Test Check the title is in h2', () => {
        const BlockTitle = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > h2');
        expect(BlockTitle).toHaveAttribute('<h2, </h2>')
    });
    // Test 3 Check displaying of Linking Card block 1//
    it('Test Check displaying of Linking Card block 1 ', () => {
        const LCB1 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(1) > div');
        expect(LCB1).toBeDisplayed()
    });
    // Test 4 Check alt for LCB1//
    it('Check alt for LCB1', () => {
        const Image = ('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(1) > div > div > div.bfadd297 > img')
        expect(Image).toHaveAttribute('alt')
    });
    // Test 5 Check redirection to page from LC1 //
    it('Test Check redirection to page from LC1', () => {
        const LCBlock1 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(1) > div > div > a');
        expect(LCBlock1).toHaveUrlContaining('/online-blackjack/')
        LCBlock1.click()
    });
    // Test 6 Check displaying of Linking Card block 2//
    it('Test Check displaying of Linking Card block 2 ', () => {
        const LCB2 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(2) > div');
        expect(LCB2).toBeDisplayed()
    });
    // Test 7 Check alt for LCB2//
    it('Check alt for LCB2', () => {
        const Image2 = ('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(2) > div > div > div.bfadd297 > img')
        expect(Image2).toHaveAttribute('alt')
    });
    // Test 8 Check redirection to page from LC2 //
    it('Test Check redirection to page from LC2', () => {
        const LCBlock2 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(2) > div > div > a');
        expect(LCBlock2).toHaveUrlContaining('/gokkasten/fruitautomaten/')
        LCBlock2.click()
    });
    // Test 9 Check displaying of Linking Card block 3//
    it('Test Check displaying of Linking Card block 3 ', () => {
        const LCB3 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(3) > div');
        expect(LCB3).toBeDisplayed()
    });
    // Test 10 Check alt for LCB3//
    it('Check alt for LCB3', () => {
        const Image3 = ('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(3) > div > div > div.bfadd297 > img')
        expect(Image3).toHaveAttribute('alt')
    });
    // Test 11 Check redirection to page from LC3 //
    it('Test Check redirection to page from LC3', () => {
        const LCBlock3 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(3) > div > div > a');
        expect(LCBlock3).toHaveUrlContaining('/online-roulette/')
        LCBlock3.click()
    });
    // Test 12 Check displaying of Linking Card block 4//
    it('Test Check displaying of Linking Card block 4', () => {
        const LCB4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(4) > div');
        expect(LCB4).toBeDisplayed()
    });
    // Test 13 Check alt for LCB4//
    it('Check alt for LCB4', () => {
        const Image4 = ('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(4) > div > div > div.bfadd297 > img')
        expect(Image4).toHaveAttribute('alt')
    });
    // Test 14 Check redirection to page from LC4 //
    it('Test Check redirection to page from LC4', () => {
        const LCBlock4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(4) > div > div > a');
        expect(LCBlock4).toHaveUrlContaining('/baccarat/')
        LCBlock4.click()
    });
    // Test 15 Check displaying of Linking Card block 5//
    it('Test Check displaying of Linking Card block 5', () => {
        const LCB5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(5) > div');
        expect(LCB5).toBeDisplayed()
    });
    // Test 16 Check alt for LCB5//
    it('Check alt for LCB5', () => {
        const Image5 = ('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(5) > div > div > div.bfadd297 > img')
        expect(Image5).toHaveAttribute('alt')
    });
    // Test 17 Check redirection to page from LC5 //
    it('Test Check redirection to page from LC5', () => {
        const LCBlock5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(5) > div > div > a');
        expect(LCBlock5).toHaveUrlContaining('/online-poker/')
        LCBlock5.click()
    });
    // Test 18 Check displaying of Linking Card block 6//
    it('Test Check displaying of Linking Card block 6', () => {
        const LCB6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(6) > div');
        expect(LCB6).toBeDisplayed()
    });
    // Test 19 Check alt for LCB6//
    it('Check alt for LCB6', () => {
        const Image6 = ('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(6) > div > div > div.bfadd297 > img')
        expect(Image6).toHaveAttribute('alt')
    });
    // Test 20 Check redirection to page from LC6 //
    it('Test Check redirection to page from LC6', () => {
        const LCBlock6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(11) > div > div > div:nth-child(6) > div > div > a');
        expect(LCBlock6).toHaveUrlContaining('/live-casino/dream-catcher/')
        LCBlock6.click()
    });
});
