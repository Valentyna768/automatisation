
describe('Check Footer', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1  Footer displaying//
    it('Check if footer is displaying ', () => {
        const footer = $('/html/body/div/footer');
        expect(footer).toBeDisplayed()
        expect(footer).toHaveAttr('class="bfade2f"')
    });
    // Test 2 Displaying of "Populaire categorieën" column//
    it('should display title of first column', () => {
        const firstColumn = $('/html/body/div/footer/div/div[1]/div[1]');
        expect(firstColumn).toBeDisplayed()
        expect(firstColumn).toHaveTextContaining('Populaire categorieën')
    });
    // Test 3 Check 1 url in "Populaire categorieën" column //
    it('check "Best Uitbetalende Online Casino’s" link', () => {
        const bestUit = $('//*[@id="menu-item-5243"]');
        expect(bestUit).toHaveLink('https://nederlandscasinos.net/best-uitbetalende-goksites/')
        bestUit.click()
    });
    // Test 4 Check 2 url in "Populaire categorieën" column //
    it('check "Echt Geld Online Casinos" link', () => {
        const echtGelt = $('//*[@id="menu-item-5244"]');
        expect(echtGelt).toHaveLink('https://nederlandscasinos.net/echt-geld/')
        echtGelt.click()
    });
    // Test 5 Check 3 url in "Populaire categorieën" column //
    it('check "Beste Online Casino’s in Nederland" link', () => {
        const besteOnline = $('//*[@id="menu-item-5245"]');
        expect(besteOnline).toHaveLink('https://nederlandscasinos.net/beste-online-casinos/')
        besteOnline.click()
    });
    // Test 6 Check 4 url in "Populaire categorieën" column //
    it('check "Beste Online Mobiele casino’s" link', () => {
        const onlineMob = $('//*[@id="menu-item-5246"]');
        expect(onlineMob).toHaveLink('https://nederlandscasinos.net/mobiele-casinos/')
        onlineMob.click()
    });
    // Test 7 Check 5 url in "Populaire categorieën" column //
    it('check "Beste Live casino’s" link', () => {
        const bestLive = $('//*[@id="menu-item-5247"]');
        expect(bestLive).toHaveLink('https://nederlandscasinos.net/live-casino/')
        bestLive.click()
    });
    // Test 8 Check 6 url in "Populaire categorieën" column //
    it('check "Nieuwe online casino’s" link', () => {
        const Nieuwe = $('//*[@id="menu-item-5248"]');
        expect(Nieuwe).toHaveLink('https://nederlandscasinos.net/nieuwe-online-casinos/')
        Nieuwe.click()
    });
    // Test 9 Check 7 url in "Populaire categorieën" column //
    it('check "No Account Casino" link', () => {
        const noAccount = $('//*[@id="menu-item-5249"]');
        expect(noAccount).toHaveLink('https://nederlandscasinos.net/no-account-casino/')
        noAccount.click()
    });
    // Test 10 Check 8 url in "Populaire categorieën" column //
    it('check "No deposit bonus" link', () => {
        const noDep = $('//*[@id="menu-item-5273"]');
        expect(noDep).toHaveLink('https://nederlandscasinos.net/no-deposit-bonus/')
        noDep.click()
    });
    // Test 11 Check 9 url in "Populaire categorieën" column //
    it('check "Pay N Play Casino’s" link', () => {
        const playNp = $('//*[@id="menu-item-5274"]');
        expect(playNp).toHaveLink('https://nederlandscasinos.net/payments/pay-n-play/')
        playNp.click()
    });
    // Test 12 Check 10 url in "Populaire categorieën" column //
    it('check "Trustly Casino’s" link', () => {
        const trustly = $('//*[@id="menu-item-5275"]');
        expect(trustly).toHaveLink('https://nederlandscasinos.net/payments/trustly-casinos/')
        trustly.click()
    });
    // Test 13 Check 11 url in "Populaire categorieën" column //
    it('check "iDeal Online Casino’s" link', () => {
        const iDeal = $('//*[@id="menu-item-5276"]"]');
        expect(iDeal).toHaveLink('https://nederlandscasinos.net/payments/ideal-casino/')
        iDeal.click()
    });
    // Test 14 Displaying of "Casino reviews" column//
    it('should display title of second column', () => {
        const firstColumn = $('/html/body/div/footer/div/div[1]/div[2]');
        expect(firstColumn).toBeDisplayed()
        expect(firstColumn).toHaveTextContaining('Casino reviews')
    });
    // Test 15 Check 1 url in "Casino reviews" column //
    it('check "Maneki Casino" link', () => {
        const maneki = $('//*[@id="menu-item-5256"]');
        expect(maneki).toHaveLink('https://nederlandscasinos.net/review/maneki-casino/')
        maneki.click()
    });
    // Test 15 Check 2 url in "Casino reviews" column //
    it('check "Loyal Casino" link', () => {
        const loyal = $('//*[@id="menu-item-5257"]');
        expect(loyal).toHaveLink('https://nederlandscasinos.net/review/loyal-casino/')
        loyal.click()
    });
    // Test 16 Check 3 url in "Casino reviews" column //
    it('check "N1 Casino" link', () => {
        const n1Casino = $('//*[@id="menu-item-5258"]');
        expect(n1Casino).toHaveLink('https://nederlandscasinos.net/review/n1-casino/')
        n1Casino.click()
    });
    // Test 17 Check 4 url in "Casino reviews" column //
    it('check "Mr.Green Casino" link', () => {
        const mrGreen = $('//*[@id="menu-item-5288"]');
        expect(mrGreen).toHaveLink('https://nederlandscasinos.net/review/mr-green/')
        mrGreen.click()
    });
    // Test 18 Check 5 url in "Casino reviews" column //
    it('check "Gametwist Casino" link', () => {
        const gametwist = $('//*[@id="menu-item-5289"]');
        expect(gametwist).toHaveLink('https://nederlandscasinos.net/review/gametwist-casino/')
        gametwist.click()
    });
    // Test 19 Check 6 url in "Casino reviews" column //
    it('check "Betchan Casino" link', () => {
        const betchan = $('//*[@id="menu-item-5290"]');
        expect(betchan).toHaveLink('https://nederlandscasinos.net/review/betchan-casino/')
        betchan.click()
    });
    // Test 20 Displaying of "Recente berichten" column//
    it('should display title of third column', () => {
        const firstColumn = $('/html/body/div/footer/div/div[1]/div[3]');
        expect(firstColumn).toBeDisplayed()
        expect(firstColumn).toHaveTextContaining('Recente berichten')
    });
    // Test 21 Check 1 url in "Recente berichten" column //
    it('check "Online Casinos Zonder Registratie" link', () => {
        const zonder = $('//*[@id="menu-item-5282"]');
        expect(zonder).toHaveLink('https://nederlandscasinos.net/casinos-zonder-registratie/')
        zonder.click()
    });
    // Test 22 Check 2 url in "Recente berichten" column //
    it('check "Gratis Spins Bij Registratie" link', () => {
        const gratisSpins = $('//*[@id="menu-item-5283"]');
        expect(gratisSpins).toHaveLink('https://nederlandscasinos.net/bonussen/gratis-free-spins/')
        gratisSpins.click()
    });
    // Test 23 Check 3 url in "Recente berichten" column //
    it('check "Google Pay casino’s" link', () => {
        const googlePay = $('//*[@id="menu-item-5284"]');
        expect(googlePay).toHaveLink('https://nederlandscasinos.net/payments/google-pay/')
        googlePay.click()
    });
    // Test 24 Check 4 url in "Recente berichten" column //
    it('check "Apple Pay" link', () => {
        const applePay = $('//*[@id="menu-item-5285"]');
        expect(applePay).toHaveLink('https://nederlandscasinos.net/payments/apple-pay/')
        applePay.click()
    });
    // Test 25 Check 5 url in "Recente berichten" column //
    it('check "Sepa Casino" link', () => {
        const sepaCasino = $('//*[@id="menu-item-5286"]');
        expect(sepaCasino).toHaveLink('https://nederlandscasinos.net/payments/sepa-casino/')
        sepaCasino.click()
    });
    // Test 26 Check 6 url in "Recente berichten" column //
    it('check "Online Poker Sites" link', () => {
        const pokerSites = $('//*[@id="menu-item-5287"]');
        expect(pokerSites).toHaveLink('https://nederlandscasinos.net/online-poker/')
        pokerSites.click()
    });
    // Test 27 Check 7 url in "Recente berichten" column //
    it('check "Snelle uitbetaling casino" link', () => {
        const Snelle = $('//*[@id="menu-item-7131"]');
        expect(Snelle).toHaveLink('https://nederlandscasinos.net/de-snelst-uitbetalende-casinos/')
        Snelle.click()
    });
    // Test 28 Displaying of "Informatie" column//
    it('should display title of fourth column', () => {
        const firstColumn = $('/html/body/div/footer/div/div[1]/div[4]');
        expect(firstColumn).toBeDisplayed()
        expect(firstColumn).toHaveTextContaining('Informatie')
    });
    // Test 29 Check 1 url in "Informatie" column //
    it('check "Contact" link', () => {
        const contact = $('//*[@id="menu-item-5277"]');
        expect(contact).toHaveLink('https://nederlandscasinos.net/contact/')
        contact.click()
    });
    // Test 30 Check 2 url in "Informatie" column //
    it('check "Over ons" link', () => {
        const overOns = $('//*[@id="menu-item-6508"]');
        expect(overOns).toHaveLink('https://nederlandscasinos.net/over-ons/')
        overOns.click()
    });
    // Test 31 Check 3 url in "Informatie" column //
    it('check "Hoe we casino’s beoordelen" link', () => {
        const beoordelen = $('//*[@id="menu-item-6646"]');
        expect(beoordelen).toHaveLink('https://nederlandscasinos.net/over-ons/')
        beoordelen.click()
    });
    // Test 32 Check 4 url in "Informatie" column //
    it('check "Legaal gokken" link', () => {
        const gokken = $('//*[@id="menu-item-5280"]');
        expect(gokken).toHaveLink('https://nederlandscasinos.net/legaal-gokken/')
        gokken.click()
    });
    // Test 33 Check 5 url in "Informatie" column //
    it('check "Privacybeleid" link', () => {
        const Privacybeleid = $('//*[@id="menu-item-5281"]');
        expect(Privacybeleid).toHaveLink('https://nederlandscasinos.net/privacybeleid/')
        Privacybeleid.click()
    });
});