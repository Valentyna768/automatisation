
describe('Casino Table block', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1  Check displaying of Casino Table//
    it('Check Casino Table displaying ', () => {
        const casinoTable = $('/html/body/div/div/div/div[1]/main/section[1]');
        expect(casinoTable).toBeDisplayed()
    });
    // Test 2  Check title for Casino Table//
    it('Check title for Casino Table ', () => {
        const tableTitle = $('/html/body/div/div/div/div[1]/main/section[1]/h2');
        expect(tableTitle).toBeDisplayed()
        expect(tableTitle).toHaveTextContaining('De beste Nederlandse online casino')
    });
    // Test 3  Check top1 cart displaying in Casino Table//
    it('Check Top 1 cart displaying ', () => {
        const top1 = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]');
        expect(top1).toBeDisplayed()
    });
    // Test 4  Check click on top1 cart and redirect to brand//
    it('click on top1 and redirect to brand ', () => {
        const top1cart = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]');
        expect(top1cart).toHaveUrlContaining('go-to?idcasino', 'cid', 'element', 'source_url')
        top1cart.click()
    });
    // Test 5  show Casino logo and alt in top1//
    it('show Casino logo and alt in top1', () => {
        const top1Logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[1]/img');
        expect(top1Logo).toBeDisplayed()
        expect(top1Logo).toHaveAttributeContaining('alt')
        expect(top1Logo).toHaveUrlContaining('go-to?idcasino', 'cid', 'element', 'source_url')
        top1Logo.click()
    });
    // Test 6  show bonus in top1//
    it('show bonus in top1', () => {
        const bonus = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[2]');
        expect(bonus).toHaveTextContaining('ˆ500 + 225 Gratis Spins')
    });
});