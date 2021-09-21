describe('Check links in submenu', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1 Verify submenu 1 також присутні помилки про невалідні id //
    it('should click on 1 submenu and verify new url', () => {
        const subMenu1 = $('//*[@id="menu-item-5236"]');
        expect(subMenu1).toHaveLink('https://nederlandscasinos.net/lage-storting/')
        subMenu1.click();
    });
    // Test 2 Verify submenu 2 //
    it('should click on 2 submenu and verify new url', () => {
        const subMenu2 = $('//*[@id="menu-item-5241"]');
        expect(subMenu2).toHaveLink('https://nederlandscasinos.net/lage-storting/1-euro-storten-casino/')
        subMenu2.click();
    });
    // Test 3 Verify submenu 3 //
    it('should click on 3 submenu and verify new url', () => {
        const subMenu3 = $('//*[@id="menu-item-5240"]');
        expect(subMenu3).toHaveLink('https://nederlandscasinos.net/lage-storting/2-euro-storten-casino/')
        subMenu3.click();
    });
    // Test 4 Verify submenu 4 //
    it('should click on 4 submenu and verify new url', () => {
        const subMenu4 = $('//*[@id="menu-item-5237"]');
        expect(subMenu4).toHaveLink('https://nederlandscasinos.net/lage-storting/3-euro-storten-casino/')
        subMenu4.click();
    });
    // Test 5 Verify submenu 5 //
    it('should click on 5 submenu and verify new url', () => {
        const subMenu5 = $('//*[@id="menu-item-5239"]');
        expect(subMenu5).toHaveLink('https://nederlandscasinos.net/lage-storting/5-euro-storten-casino/')
        subMenu5.click();
    });
    // Test 6 Verify submenu 6 //
    it('should click on 6 submenu and verify new url', () => {
        const subMenu6 = $('//*[@id="menu-item-5238"]');
        expect(subMenu6).toHaveLink('https://nederlandscasinos.net/lage-storting/10-deposit-casino/')
        subMenu6.click();
    });
});