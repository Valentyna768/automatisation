describe('Casino Table block', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1  Check displaying of Linking card block//
    it('Check displaying of Linking card block', () => {
        const LinkingCardblock = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div');
        expect(LinkingCardblock).toBeDisplayed()
    });
    // Test 2 Check the title is in h2//
    it('Test Check the title is in h2', () => {
        const BlockTitle = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > h2');
        expect(BlockTitle).toHaveAttribute('<h2, </h2>')
    });
    // Test 3 Check displaying of Linking Card block 1//
    it('Test Check displaying of Linking Card block 1 ', () => {
        const LCB1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(1)');
        expect(LCB1).toBeDisplayed()
    });
    // Test 4 Check alt for LCB1//
    it('Check alt for LCB1', () => {
        const Image = ('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(1) > div > div > div.bfadd297 > img')
        expect(Image).toHaveAttribute('alt')
    });
    // Test 5 Check redirection to page from LC1 //
    it('Test Check redirection to page from LC1', () => {
        const LCBlock1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(1) > div > div > a');
        expect(LCBlock1).toHaveUrlContaining('/echt-geld/')
        LCBlock1.click()
    });
    // Test 6 Check displaying of Linking Card block 2//
    it('Test Check displaying of Linking Card block 2 ', () => {
        const LCB2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(2)');
        expect(LCB2).toBeDisplayed()
    });
    // Test 7 Check alt for LCB2//
    it('Check alt for LCB2', () => {
        const Image2 = ('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(2) > div > div > div.bfadd297 > img')
        expect(Image2).toHaveAttribute('alt')
    });
    // Test 8 Check redirection to page from LC2 //
    it('Test Check redirection to page from LC2', () => {
        const LCBlock2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(2) > div > div > a');
        expect(LCBlock2).toHaveUrlContaining('/beste-online-casinos/')
        LCBlock2.click()
    });
    // Test 9 Check displaying of Linking Card block 3//
    it('Test Check displaying of Linking Card block 3 ', () => {
        const LCB3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(3)');
        expect(LCB3).toBeDisplayed()
    });
    // Test 10 Check alt for LCB3//
    it('Check alt for LCB3', () => {
        const Image3 = ('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(3) > div > div > div.bfadd297 > img')
        expect(Image3).toHaveAttribute('alt')
    });
    // Test 11 Check redirection to page from LC3 //
    it('Test Check redirection to page from LC3', () => {
        const LCBlock3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(6) > div > div > div:nth-child(3) > div > div > a');
        expect(LCBlock3).toHaveUrlContaining('/best-uitbetalende-goksites/')
        LCBlock3.click()
    });
});
