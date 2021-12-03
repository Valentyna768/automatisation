//without testing header, footer, widgets//
describe('Casino review page', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/review/casinowin-bet/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check displaying of braedcrumps//
    it('Check displaying of braedcrumps', () => {
        const breadcrumps = $('body > div > div > div > div.bfad93f > div');
        expect(breadcrumps).toBeDisplayed()
        const homeBc = $('body > div > div > div > div.bfad93f > div > p > span > span > a')
        expect(homeBc).toHaveTextContaining('Online Casino')
        expect(homeBc).toHaveAttr('href')
        expect(homeBc).toHaveLink('https://nederlandscasinos.net/')
        homeBc.click()
        const pageBc = $('body > div > div > div > div.bfad93f > div > p > span > span > strong')
        expect(pageBc).toBeDisplayed
    });
    // Test 2  Check casinos logo//
    it('Check casinos logo', async () => {
        const imageRef = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfaddc8 > div')
        imageRef.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6512&location=https://nederlandscasinos.net/review/casinowin-bet/&cid=1313767433.1636014210&element=cta_casino_page_logo')
        const imageAlt = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfaddc8 > div > div > img')
        expect(imageAlt).toHaveAttr('alt="Casinowin"')
    });
    // Test 3  Check block with title, raiting, bonus, cta//
    it('Check block with title, raiting, bonus, cta', async () => {
        const block = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfad464')
        expect(block).toBeDisplayed
        const titleH1 = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfad464 > h1')
        expect(titleH1).toHaveAttr('<h1, </h1>')
        const raiting = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfad464 > div.bfad2c4 > div')
        expect(raiting).toBeDisplayed
        const bonus = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfad464 > div.bfad582 > div.bfadb5d0')
        expect(bonus).toBeDisplayed
        expect(bonus).toHaveTextContaining('400% tot €2000')
        expect(bonus).toHaveAttr('<h3>, </h3>')
        const cta = $('body > div > div > div > div.bfad93f > main > section > div.bfad0a0 > div > div.bfad464 > div.bfad582 > div.bfad29b > button')
        cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6512&location=https://nederlandscasinos.net/review/casinowin-bet/&cid=1313767433.1636014210&element=cta_single_header_button')
    });
    // Test 4  Check providers block//
    it('Check providers block', async () => {
        const providersBlock = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5')
        expect(providersBlock).toBeDisplayed
        const provider1 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(1)')
        expect(provider1).toHaveAttr('href')
        expect(provider1).toHaveLink('https://nederlandscasinos.net/providers/betsoft/')
        expect(provider1).toHaveTextContaining('Betsoft')
        provider1.click()
        const provider2 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(2)')
        expect(provider2).toHaveAttr('href')
        expect(provider2).toHaveLink('https://nederlandscasinos.net/providers/quickspin/')
        expect(provider2).toHaveTextContaining('Het Quickspin online casino in Nederland voor casinospellen')
        provider2.click()
        const provider3 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(3)')
        expect(provider3).toHaveAttr('href')
        expect(provider3).toHaveLink('https://nederlandscasinos.net/providers/igt/')
        expect(provider3).toHaveTextContaining('IGT')
        provider3.click()
        const provider4 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(4)')
        expect(provider4).toHaveAttr('href')
        expect(provider4).toHaveLink('https://nederlandscasinos.net/providers/merkur/')
        expect(provider4).toHaveTextContaining('Merkur')
        provider4.click()
        const provider5 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(5)')
        expect(provider5).toHaveAttr('href')
        expect(provider5).toHaveLink('https://nederlandscasinos.net/providers/netent-casino/')
        expect(provider5).toHaveTextContaining('NetEnt')
        provider5.click()
        const provider6 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(6)')
        expect(provider6).toHaveAttr('href')
        expect(provider6).toHaveLink('https://nederlandscasinos.net/providers/novomatic/')
        expect(provider6).toHaveTextContaining('Novomatic')
        provider6.click()
        const provider7 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(7)')
        expect(provider7).toHaveAttr('href')
        expect(provider7).toHaveLink('https://nederlandscasinos.net/providers/playtech/')
        expect(provider7).toHaveTextContaining('Playtech')
        provider7.click()
        const provider8 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(8)')
        expect(provider8).toHaveAttr('href')
        expect(provider8).toHaveLink('https://nederlandscasinos.net/providers/pragmatic_play/')
        expect(provider8).toHaveTextContaining('Pragmatic Play')
        provider8.click()
        const provider9 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-software.bfad3aa5 > div > a:nth-child(9)')
        expect(provider9).toHaveAttr('href')
        expect(provider9).toHaveLink('https://nederlandscasinos.net/providers/yggdrasil/')
        expect(provider9).toHaveTextContaining('Yggdrasil')
        provider9.click()
    });
    // Test 5  Check displaying of API fields//
    it('Check displaying of API fields', async () => {
        const liveChartField = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-support-live-chat.bfad614.bfad3aa5')
        expect(liveChartField).toBeDisplayed
        const emailField = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-support-email.bfad614.bfad3aa5')
        expect(emailField).toBeDisplayed
        const telephoneField = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.overview-support_phone.bfad614.bfad3aa5')
        expect(telephoneField).toBeDisplayed
    });
    // Test 5  Check displaying of Payment field//
    it('Check displaying of Payment field', async () => {
        const paymentField = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c')
        expect(paymentField).toBeDisplayed
        const payment1 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c > div > div:nth-child(1) > a')
        expect(payment1).toHaveAttr('href')
        expect(payment1).toHaveLink('https://nederlandscasinos.net/payments/ideal-casino/')
        payment1.click()
        const payment2 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c > div > div:nth-child(2) > a')
        expect(payment2).toHaveAttr('href')
        expect(payment2).toHaveLink('https://nederlandscasinos.net/payments/mastercard/')
        payment2.click()
        const payment3 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c > div > div:nth-child(3) > a')
        expect(payment3).toHaveAttr('href')
        expect(payment3).toHaveLink('https://nederlandscasinos.net/payments/neteller-casino/')
        payment3.click()
        const payment4 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c > div > div:nth-child(4) > a')
        expect(payment4).toHaveAttr('href')
        expect(payment4).toHaveLink('https://nederlandscasinos.net/payments/skrill/')
        payment4.click()
        const payment5 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c > div > div:nth-child(5) > a')
        expect(payment5).toHaveAttr('href')
        expect(payment5).toHaveLink('https://nederlandscasinos.net/payments/visa-casinos/')
        payment5.click()
        const payment6 = $('body > div > div > div > div.bfad93f > main > section > div.bfadd9d6 > div.bfadb3c > div > div:nth-child(6) > a')
        expect(payment6).toHaveAttr('href')
        expect(payment6).toHaveLink('https://nederlandscasinos.net/payments/sofort/')
        payment6.click()
    });
    // Test 6  Check FAQ block//
    it(' Check FAQ block', async () => {
        const faqBlock = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div')
        expect(faqBlock).toBeDisplayed
        expect(faqBlock).toHaveAttr('itemtype="https://schema.org/FAQPage"')
        const h2 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > h2')
        expect(h2).toBeDisplayed
        expect(h2).toHaveAttr('<h2, </h2>')
        //Checking FAQ questions and answers
        const q1 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl.active.bfad275.js-faq-block > div > dt')
        expect(q1).toBeDisplayed
        expect(q1).toHaveAttr('itemtype="https://schema.org/Question"')
        const a1 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl:nth-child(2) > div')
        expect(a1).toBeDisplayed
        expect(a1).toHaveAttr('itemtype="https://schema.org/Answer"')
        const q2 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl:nth-child(3) > div')
        expect(q2).toBeDisplayed
        expect(q2).toHaveAttr('itemtype="https://schema.org/Question"')
        q2.click()
        const a2 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl.bfad275.js-faq-block.active > div > div')
        expect(a2).toBeDisplayed
        expect(a2).toHaveAttr('itemtype="https://schema.org/Answer"')
        const q3 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl:nth-child(3) > div')
        expect(q3).toBeDisplayed
        expect(q3).toHaveAttr('itemtype="https://schema.org/Question"')
        q3.click()
        const a3 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl.bfad275.js-faq-block.active > div > div')
        expect(a3).toBeDisplayed
        expect(a3).toHaveAttr('itemtype="https://schema.org/Answer"')

        const q4 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl.bfad275.js-faq-block.active > div')
        expect(q4).toBeDisplayed
        expect(q4).toHaveAttr('itemtype="https://schema.org/Question"')
        q4.click()
        const a4 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl.bfad275.js-faq-block.active > div > div')
        expect(a4).toBeDisplayed
        expect(a4).toHaveAttr('itemtype="https://schema.org/Answer"')

        const q5 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl:nth-child(5) > div')
        expect(q5).toBeDisplayed
        expect(q5).toHaveAttr('itemtype="https://schema.org/Question"')
        q5.click()
        const a5 = $('body > div > div:nth-child(1) > div > div.bfad93f > main > section:nth-child(3) > div > div > dl.bfad275.js-faq-block.active > div > div')
        expect(a5).toBeDisplayed
        expect(a5).toHaveAttr('itemtype="https://schema.org/Answer"')
    });
});
