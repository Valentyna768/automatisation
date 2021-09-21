describe('Check languages switcher and hreflangs', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1 Verify language menu - знов невалідні id//
it('verify language menu', () => {
    const langMenu = $('/html/body/div/div/div/div[1]/header/div/nav[2]');
    expect(langMenu).toBeDisplayed()
});
    // Test 2 Check languages urls//
it('check languages url', () => {
    const langNL = $('/html/body/div/div/div/div[1]/header/div/nav[2]/ul/li');
    expect(langNL).toHaveLink('https://nederlandscasinos.net/')
    langNL.click();
    const langEN = $('/html/body/div/div/div/div[1]/header/div/nav[2]/ul/li/ul');
    expect(langEN).toHaveLink('https://nederlandscasinos.net/en/')
    langEN.click();
    const langCA = $('/html/body/div/div/div/div[1]/header/div/nav[2]/ul/li/ul/li[2]');
    expect(langCA).toHaveLink('https://chiefcasinos.com/')
    langCA.click();
});
    // Test 3 Check hreflangs for language menu//
it('verify hreflangs', () => {
    const hreflangNL = $('/html/head/link[19]')
    expect(hreflangNL).toHaveHrefContaining('hreflang="nl_NL')
    const hreflangEN = $('/html/head/link[20]')
    expect(hreflangEN).toHaveHrefContaining('hreflang="en_NL')
    const hreflangCA = $('/html/head/link[21]')
    expect(hreflangCA).toHaveHrefContaining('hreflang="en-CA')
    });
});