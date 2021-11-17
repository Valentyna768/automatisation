describe('Author block', () => {
    beforeEach(async function () {
        browser.url('https://nederlandscasinos.net/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check displaying of Author block  //
    it('Check displaying of Author block', async () => {
        const authorBlock = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div');
        expect(authorBlock).toBeDisplayed()
        const titleH2 = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div > span.bfad1cf')
        expect(titleH2).toBeDisplayed()
        expect(titleH2).toHaveTextContaining('Geschreven door:')
        const authorPhoto = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div > div.bfad246 > img')
        expect(authorPhoto).toBeDisplayed()
        const authorName = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div > span.bfad6869')
        expect(authorName).toBeDisplayed()
        const authorDescription = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div > div.bfad978')
        expect(authorDescription).toBeDisplayed
        expect(authorDescription).toHaveTextContaining(' Hallo, ik ben Kathleen Spiering, welkom op mijn website waar ik adviezen en aanbevelingen deel en je wil helpen om oplichting en andere valkuilen bij gokken  te voorkomen,')
    });
    // Test 2  Check email in Author block (Как закрыть окно почтовика?) //
    it('Check social icons in Author block', async () => {
        const authorEmail = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div > div.bfadd4f > a:nth-child(1)')
        expect(authorEmail).toBeDisplayed
        expect(authorEmail).toHaveAttrContaining('href=, rel="nofollow noopener"')
        authorEmail.click()
        await browser.newWindow('mailto:info@nederlandscasinos.net')
    });
    // Test 3  Check telegram in Author block (Как закрыть окно почтовика?) //
    it('Check social icons in Author block', async () => {
    const authorTelegram = $('body > div > div > div > div.bfad93f > main > section:nth-child(25) > div > div.bfadd4f > a:nth-child(2)')
    expect(authorTelegram).toBeDisplayed
    expect(authorTelegram).toHaveAttrContaining('href=, rel="nofollow noopener"')
    authorTelegram.click()
    await browser.newWindow('mailto:https://t.me/nederlandscasinos')
    });
});
