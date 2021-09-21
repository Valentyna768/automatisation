describe('Check links in submenu', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1 Verify submenu 1 також присутні помилки про невалідні id //
    it('should click on 1 submenu and verify new url', () => {
        const subMenu1 = $('//*[@id="menu-item-5178"]');
        expect(subMenu1).toHaveLink('https://nederlandscasinos.net/bonussen/')
        subMenu1.click();
    });
    // Test 2 Verify submenu 2 //
    it('should click on 2 submenu and verify new url', () => {
        const subMenu2 = $('//*[@id="menu-item-5179"]');
        expect(subMenu2).toHaveLink('https://nederlandscasinos.net/bonussen/100-bonus/')
        subMenu2.click();
    });
    // Test 3 Verify submenu 3 //
    it('should click on 3 submenu and verify new url', () => {
        const subMenu3 = $('//*[@id="menu-item-5181"]');
        expect(subMenu3).toHaveLink('https://nederlandscasinos.net/bonussen/200-bonus/')
        subMenu3.click();
    });
    // Test 4 Verify submenu 4 //
    it('should click on 4 submenu and verify new url', () => {
        const subMenu4 = $('//*[@id="menu-item-5182"]');
        expect(subMenu4).toHaveLink('https://nederlandscasinos.net/bonussen/300-bonus/')
        subMenu4.click();
    });
    // Test 5 Verify submenu 5 //
    it('should click on 5 submenu and verify new url', () => {
        const subMenu5 = $('//*[@id="menu-item-5192"]');
        expect(subMenu5).toHaveLink('https://nederlandscasinos.net/bonussen/400-casino-bonus/')
        subMenu5.click();
    });
    // Test 6 Verify submenu 6 //
    it('should click on 6 submenu and verify new url', () => {
        const subMenu6 = $('//*[@id="menu-item-5183"]');
        expect(subMenu6).toHaveLink('https://nederlandscasinos.net/bonussen/500-bonus/')
        subMenu6.click();
    });
    // Test 7 Verify submenu 7 //
    it('should click on 7 submenu and verify new url', () => {
        const subMenu7 = $('//*[@id="menu-item-5180"]');
        expect(subMenu7).toHaveLink('https://nederlandscasinos.net/bonussen/welkomstbonus/"')
        subMenu7.click();
    });
    // Test 8 Verify submenu 8 //
    it('should click on 8 submenu and verify new url', () => {
        const subMenu8 = $('//*[@id="menu-item-5184"]');
        expect(subMenu8).toHaveLink('https://nederlandscasinos.net/bonussen/live-casino-bonussen/')
        subMenu8.click();
    });
    // Test 9 Verify submenu 9 //
    it('should click on 9 submenu and verify new url', () => {
        const subMenu9 = $('//*[@id="menu-item-5185"]');
        expect(subMenu9).toHaveLink('https://nederlandscasinos.net/bonussen/cashback/')
        subMenu9.click();
    });
    // Test 10 Verify submenu 10 //
    it('should click on 10 submenu and verify new url', () => {
        const subMenu10 = $('//*[@id="menu-item-5186"]');
        expect(subMenu10).toHaveLink('https://nederlandscasinos.net/bonussen/gratis-free-spins/')
        subMenu10.click();
    });
    // Test 11 Verify submenu 11 //
    it('should click on 11 submenu and verify new url', () => {
        const subMenu11 = $('//*[@id="menu-item-5187"]');
        expect(subMenu11).toHaveLink('https://nederlandscasinos.net/bonussen/low-wagering-bonus/')
        subMenu11.click();
    });
    // Test 12 Verify submenu 12 //
    it('should click on 12 submenu and verify new url', () => {
        const subMenu12 = $('//*[@id="menu-item-5188"]');
        expect(subMenu12).toHaveLink('https://nederlandscasinos.net/no-deposit-bonus/')
        subMenu12.click();
    });
    // Test 13 Verify submenu 13 //
    it('should click on 13 submenu and verify new url', () => {
        const subMenu13 = $('//*[@id="menu-item-5193"]');
        expect(subMenu13).toHaveLink('https://nederlandscasinos.net/bonussen/reload-casino-bonussen/')
        subMenu13.click();
    });
});