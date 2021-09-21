describe('Check links in submenu', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1 Verify submenu 1  також присутні помилки про невалідні id//
    it('should click on 1 submenu and verify new url', () => {
    const subMenu1 = $('//*[@id="menu-item-5163"]');
        expect(subMenu1).toHaveLink('https://nederlandscasinos.net/live-casino/')
    subMenu1.click()
    });
    // Test 2 Verify submenu 2 //
    it('should click on 2 submenu and verify new url', () => {
        const subMenu2 = $('//*[@id="menu-item-5164"]');
        expect(subMenu2).toHaveLink('https://nederlandscasinos.net/echt-geld/')
        subMenu2.click();
    });
    // Test 3 Verify submenu 3 //
    it('should click on 3 submenu and verify new url', () => {
        const subMenu3 = $('//*[@id="menu-item-5165"]');
        expect(subMenu3).toHaveLink('https://nederlandscasinos.net/beste-online-casinos/')
        subMenu3.click();
    });
    // Test 4 Verify submenu 4 //
    it('should click on 4 submenu and verify new url', () => {
        const subMenu4 = $('//*[@id="menu-item-5166"]');
        expect(subMenu4).toHaveLink('https://nederlandscasinos.net/nieuwe-online-casinos/')
        subMenu4.click();
    });
    // Test 5 Verify submenu 5 //
    it('should click on 5 submenu and verify new url', () => {
        const subMenu5 = $('//*[@id="menu-item-7061"]');
        expect(subMenu5).toHaveLink('https://nederlandscasinos.net/best-uitbetalende-goksites/')
        subMenu5.click();
    });
    // Test 6 Verify submenu 6 //
    it('should click on 6 submenu and verify new url', () => {
        const subMenu6 = $('//*[@id="menu-item-7181"]');
        expect(subMenu6).toHaveLink('https://nederlandscasinos.net/casinos-zonder-registratie/')
        subMenu6.click();
    });
    // Test 7 Verify submenu 7 //
    it('should click on 7 submenu and verify new url', () => {
        const subMenu7 = $('//*[@id="menu-item-5167"]');
        expect(subMenu7).toHaveLink('https://nederlandscasinos.net/no-account-casino/')
        subMenu7.click();
    });
    // Test 8 Verify submenu 8 //
    it('should click on 8 submenu and verify new url', () => {
        const subMenu8 = $('//*[@id="menu-item-5168"]');
        expect(subMenu8).toHaveLink('https://nederlandscasinos.net/de-snelst-uitbetalende-casinos/')
        subMenu8.click();
    });
    // Test 9 Verify submenu 9 //
    it('should click on 9 submenu and verify new url', () => {
        const subMenu9 = $('//*[@id="menu-item-5168"]');
        expect(subMenu9).toHaveLink('nederlandscasinos.net/de-snelst-uitbetalende-casinos/')
        subMenu9.click();
    });
});