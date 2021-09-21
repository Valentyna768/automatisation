describe('Check links in submenu', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1 Verify submenu 1 також присутні помилки про невалідні id //
    it('should click on 1 submenu and verify new url', () => {
        const subMenu1 = $('//*[@id="menu-item-5195"]');
        expect(subMenu1).toHaveLink('https://nederlandscasinos.net/review/loyal-casino/')
        subMenu1.click();
    });
    // Test 2 Verify submenu 2 //
    it('should click on 2 submenu and verify new url', () => {
        const subMenu2 = $('//*[@id="menu-item-5196"]');
        expect(subMenu2).toHaveLink('https://nederlandscasinos.net/review/dunder-casino/')
        subMenu2.click();
    });
    // Test 3 Verify submenu 3 //
    it('should click on 3 submenu and verify new url', () => {
        const subMenu3 = $('//*[@id="menu-item-5197"]');
        expect(subMenu3).toHaveLink('https://nederlandscasinos.net/review/n1-casino/')
        subMenu3.click();
    });
    // Test 4 Verify submenu 4 //
    it('should click on 4 submenu and verify new url', () => {
        const subMenu4 = $('//*[@id="menu-item-5198"]');
        expect(subMenu4).toHaveLink('https://nederlandscasinos.net/review/maneki-casino/')
        subMenu4.click();
    });
    // Test 5 Verify submenu 5 //
    it('should click on 5 submenu and verify new url', () => {
        const subMenu5 = $('//*[@id="menu-item-5199"]');
        expect(subMenu5).toHaveLink('https://nederlandscasinos.net/review/eurocasino/')
        subMenu5.click();
    });
    // Test 6 Verify submenu 6 //
    it('should click on 6 submenu and verify new url', () => {
        const subMenu6 = $('//*[@id="menu-item-6491"]');
        expect(subMenu6).toHaveLink('https://nederlandscasinos.net/review/betamo-casino/')
        subMenu6.click();
    });
    // Test 7 Verify submenu 7 //
    it('should click on 7 submenu and verify new url', () => {
        const subMenu7 = $('//*[@id="menu-item-5201"]');
        expect(subMenu7).toHaveLink('https://nederlandscasinos.net/review/spinia-casino/')
        subMenu7.click();
    });
    // Test 8 Verify submenu 8 //
    it('should click on 8 submenu and verify new url', () => {
        const subMenu8 = $('//*[@id="menu-item-5205"]');
        expect(subMenu8).toHaveLink('https://nederlandscasinos.net/review/fastbet-casino/')
        subMenu8.click();
    });
    // Test 9 Verify submenu 9 //
    it('should click on 9 submenu and verify new url', () => {
        const subMenu9 = $('//*[@id="menu-item-6492"]');
        expect(subMenu9).toHaveLink('https://nederlandscasinos.net/review/playojo-casino/')
        subMenu9.click();
    });
    // Test 10 Verify submenu 10 //
    it('should click on 10 submenu and verify new url', () => {
        const subMenu10 = $('//*[@id="menu-item-6493"]');
        expect(subMenu10).toHaveLink('https://nederlandscasinos.net/review/casiqo-casino/')
        subMenu10.click();
    });
    // Test 11 Verify submenu 11 //
    it('should click on 11 submenu and verify new url', () => {
        const subMenu11 = $('//*[@id="menu-item-6494"]');
        expect(subMenu11).toHaveLink('https://nederlandscasinos.net/review/stargames-casino/')
        subMenu11.click();
    });
    // Test 12 Verify submenu 12 //
    it('should click on 12 submenu and verify new url', () => {
        const subMenu12 = $('//*[@id="menu-item-5204"]');
        expect(subMenu12).toHaveLink('https://nederlandscasinos.net/review/lucky-days-casino/')
        subMenu12.click();
    });
    // Test 13 Verify submenu 13 //
    it('should click on 13 submenu and verify new url', () => {
        const subMenu13 = $('//*[@id="menu-item-5206"]');
        expect(subMenu13).toHaveLink('https://nederlandscasinos.net/review/eskimo-casino/')
        subMenu13.click();
    });
});