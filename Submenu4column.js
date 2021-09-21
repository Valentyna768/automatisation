describe('Check links in submenu', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1 Verify submenu 1 також присутні помилки про невалідні id //
    it('should click on 1 submenu and verify new url', () => {
        const subMenu1 = $('//*[@id="menu-item-5214"]');
        expect(subMenu1).toHaveLink('https://nederlandscasinos.net/online-roulette/')
        subMenu1.click();
    });
    // Test 2 Verify submenu 2 //
    it('should click on 2 submenu and verify new url', () => {
        const subMenu2 = $('//*[@id="menu-item-5218"]');
        expect(subMenu2).toHaveLink('https://nederlandscasinos.net/online-poker/')
        subMenu2.click();
    });
    // Test 3 Verify submenu 3 //
    it('should click on 3 submenu and verify new url', () => {
        const subMenu3 = $('//*[@id="menu-item-5217"]');
        expect(subMenu3).toHaveLink('https://nederlandscasinos.net/online-blackjack/')
        subMenu3.click();
    });
    // Test 4 Verify submenu 4 //
    it('should click on 4 submenu and verify new url', () => {
        const subMenu4 = $('//*[@id="menu-item-5235"]');
        expect(subMenu4).toHaveLink('https://nederlandscasinos.net/krasloten/')
        subMenu4.click();
    });
    // Test 5 Verify submenu 5 //
    it('should click on 5 submenu and verify new url', () => {
        const subMenu5 = $('//*[@id="menu-item-5234"]');
        expect(subMenu5).toHaveLink('https://nederlandscasinos.net/bingo/')
        subMenu5.click();
    });
    // Test 6 Verify submenu 6 //
    it('should click on 6 submenu and verify new url', () => {
        const subMenu6 = $('//*[@id="menu-item-5220"]');
        expect(subMenu6).toHaveLink('https://nederlandscasinos.net/baccarat/')
        subMenu6.click();
    });
    // Test 7 Verify submenu 7 //
    it('should click on 7 submenu and verify new url', () => {
        const subMenu7 = $('//*[@id="menu-item-5208"]');
        expect(subMenu7).toHaveLink('https://nederlandscasinos.net/gokkasten/')
        subMenu7.click();
    });
});