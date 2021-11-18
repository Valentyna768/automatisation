describe('Sertificats DMCA, co2neutralwebsite and GPWA in footer', () => {
    beforeEach(async function () {
        browser.url('https://nederlandscasinos.net/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check DMCA - displaying,attributes,clicking and redirection  //
    it('Check DMCA - displaying,attributes,clicking and redirection', async () => {
        const dmcaBlock = $('body > div > footer > div > div.bfadad0.bfad1761 > div.bfad17c.bfadef6 > div > a:nth-child(1)')
        expect(dmcaBlock).toBeDisplayed
        expect(dmcaBlock).toHaveAttr('alt="rel="nofollow noopener noreferrer"')
        const dmcaImg = $('body > div > footer > div > div.bfadad0.bfad1761 > div.bfad17c.bfadef6 > div > a: nth - child(1) > img')
        expect(dmcaImg).toHaveAttr('alt="DMCA Logo"')
        dmcaImg.click()
        await browser.newWindow('https://www.dmca.com/Protection/Status.aspx?ID=e6d2a68d-b407-4590-9ec9-4bccf3a2a9d6&refurl=https://nederlandscasinos.net/')
    });
    // Test 2  Check co2neutralwebsite - displaying,attributes,clicking and redirection //
    it('Check co2neutralwebsite - displaying,attributes,clicking and redirection', async () => {
        const co2Block = $('body > div > footer > div > div.bfadad0.bfad1761 > div.bfad17c.bfadef6 > div > a:nth-child(2)')
        expect(co2Block).toBeDisplayed
        expect(co2Block).toHaveAttr('alt="rel="nofollow noopener noreferrer"')
        const co2Img = $('body > div > footer > div > div.bfadad0.bfad1761 > div.bfad17c.bfadef6 > div > a:nth-child(2) > img')
        expect(co2Img).toHaveAttr('alt="Co2 Logo"')
        co2Img.click()
        await browser.newWindow('https://www.co2neutralwebsite.com/certificate/5664/en')
    });
    // Test 3  Check GPWA - displaying,attributes,clicking and redirection //
    it('Check GPWA - displaying,attributes,clicking and redirection', async () => {
        const gpwaBlock = $('#GPWASeal')
        expect(gpwaBlock).toBeDisplayed
        expect(gpwaBlock).toHaveAttr('alt="rel="nofollow noopener noreferrer"')
        const co2Img = $('#GPWASeal > img')
        expect(co2Img).toHaveAttr('alt="GPWA Logo"')
        co2Img.click()
        await browser.newWindow('https://certify.gpwa.org/verify/nederlandscasinos.net/')
    });
 });
