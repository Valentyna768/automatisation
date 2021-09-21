describe('Check widgets and redirection links', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1  Beste bonussen Widget displaying//
    it('Check Beste bonussen ', () => {
        const widgetBestBon = $('/html/body/div/div/div/div[2]/aside/div[1]');
        expect(widgetBestBon).toBeDisplayed()
    });
    // Test 2  Check 1 redirection link in Beste bonussen Widget//
    it('Check 1 redirection link ', () => {
        const brand1 = $('/html/body/div/div/div/div[2]/aside/div[1]/div[2]/div/div[1]');
        expect(brand1).toHaveUrlContaining('go-to?idcasino', 'cid', 'element', 'source_url')
        brand1.click()
    });
    // Test 3  Check 2 redirection link in Beste bonussen Widget//
    it('Check 2 redirection link ', () => {
        const brand2 = $('/html/body/div/div/div/div[2]/aside/div[1]/div[2]/div/div[2]');
        expect(brand2).toHaveUrlContaining('go-to?idcasino', 'cid', 'element', 'source_url')
        brand2.click()
    });
    // Test 4  Check 3 redirection link in Beste bonussen Widget//
    it('Check 3 redirection link ', () => {
        const brand3 = $('/html/body/div/div/div/div[2]/aside/div[1]/div[2]/div/div[3]');
        expect(brand3).toHaveUrlContaining('go-to?idcasino', 'cid', 'element', 'source_url')
        brand3.click()
    });


    // Test 5 Providers Widget displaying//
    it('Check Providers Widget ', () => {
        const widgetProviders = $('/html/body/div/div/div/div[2]/aside/div[1]');
        expect(widgetProviders).toBeDisplayed()
    });
    // Test 6  Check Betsoft redirection link in Providers Widget//
    it('Check redirection to Betsoft page ', () => {
        const betSoft = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[1]');
        expect(betSoft).toHaveAttr('alt')
        expect(betSoft).toHaveLink('https://nederlandscasinos.net/providers/betsoft/')
        betSoft.click()
    });
    // Test 7  Check EvolutionCasino redirection link in Providers Widget//
    it('Check redirection to EvolutionCasino page ', () => {
        const evolutionCasino = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[2]');
        expect(evolutionCasino).toHaveAttr('alt')
        expect(evolutionCasino).toHaveLink('https://nederlandscasinos.net/providers/evolution-gaming/')
        evolutionCasino.click()
    });
    // Test 8  Check IGT redirection link in Providers Widget//
    it('Check redirection to IGT page ', () => {
        const IGT = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[3]');
        expect(IGT).toHaveAttr('alt')
        expect(IGT).toHaveLink('https://nederlandscasinos.net/providers/igt/')
        IGT.click()
    });
    // Test 9  Check Mercur Casino redirection link in Providers Widget//
    it('Check redirection to Mercure Casino page ', () => {
        const MercureCasino = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[4]');
        expect(MercureCasino).toHaveAttr('alt')
        expect(MercureCasino).toHaveLink('https://nederlandscasinos.net/providers/merkur/')
        MercureCasino.click()
    });
    // Test 10  Check Microgaming Casino redirection link in Providers Widget//
    it('Check redirection to Microgaming Casino page ', () => {
        const MicrogamingCasino = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[5]');
        expect(MicrogamingCasino).toHaveAttr('alt')
        expect(MicrogamingCasino).toHaveLink('https://nederlandscasinos.net/providers/microgaming/')
        MicrogamingCasino.click()
    });
    // Test 11  Check NetEnt redirection link in Providers Widget//
    it('Check redirection to NetEnt page ', () => {
        const NetEnt = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[6]');
        expect(NetEnt).toHaveAttr('alt')
        expect(NetEnt).toHaveLink('https://nederlandscasinos.net/providers/netent-casino/')
        NetEnt.click()
    });
    // Test 12  Check Novoline Casino redirection link in Providers Widget//
    it('Check redirection to Novoline Casino page ', () => {
        const novolineCasino = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[7]');
        expect(novolineCasino).toHaveAttr('alt')
        expect(novolineCasino).toHaveLink('https://nederlandscasinos.net/providers/novoline/')
        novolineCasino.click()
    });
    // Test 13  Check Novomatic Casino redirection link in Providers Widget//
    it('Check redirection to Novomatic Casino page ', () => {
        const novomaticCasino = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[8]');
        expect(novomaticCasino).toHaveAttr('alt')
        expect(novomaticCasino).toHaveLink('https://nederlandscasinos.net/providers/novomatic/')
        novomaticCasino.click()
    });
    // Test 14  Check Playtech redirection link in Providers Widget//
    it('Check redirection to Playtech page ', () => {
        const Playtech = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[9]');
        expect(Playtech).toHaveAttr('alt')
        expect(Playtech).toHaveLink('https://nederlandscasinos.net/providers/playtech/')
        Playtech.click()
    });
    // Test 15  Check Pragmatic Play redirection link in Providers Widget//
    it('Check redirection to Pragmatic Play page ', () => {
        const pragmaticPlay = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[10]');
        expect(pragmaticPlay).toHaveAttr('alt')
        expect(pragmaticPlay).toHaveLink('https://nederlandscasinos.net/providers/pragmatic_play/')
        pragmaticPlay.click()
    });
    // Test 16  Check Simbat redirection link in Providers Widget//
    it('Check redirection to Simbat page ', () => {
        const Simbat = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[11]');
        expect(Simbat).toHaveAttr('alt')
        expect(Simbat).toHaveLink('https://nederlandscasinos.net/providers/simbat/')
        Simbat.click()
    });
    // Test 16  Check Yggdrasil Casino redirection link in Providers Widget//
    it('Check redirection to Yggdrasil Casino page ', () => {
        const Yggdrasil = $('/html/body/div/div/div/div[2]/aside/div[2]/div[2]/div/div[12]');
        expect(Yggdrasil).toHaveAttr('alt')
        expect(Yggdrasil).toHaveLink('https://nederlandscasinos.net/providers/yggdrasil/')
        Yggdrasil.click()
    });
    // Test 17 Betalingen Widget displaying//
    it('Check  Betalingen  Widget ', () => {
        const widgetProviders = $('/html/body/div/div/div/div[2]/aside/div[3]');
        expect(widgetProviders).toBeDisplayed()
    });
    // Test 18 Check Ideal redirection link in Betalingen Widget//
    it('Check redirection to Ideal Casino page  ', () => {
        const Ideal = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[1]');
        expect(Ideal).toHaveAttr('alt')
        expect(Ideal).toHaveLink('https://nederlandscasinos.net/payments/ideal-casino/')
        Ideal.click()
    });
    // Test 19 Check Ecopayz redirection link in Betalingen Widget//
    it('Check redirection to Ecopayz page  ', () => {
        const Ecopayz = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[2]');
        expect(Ecopayz).toHaveAttr('alt')
        expect(Ecopayz).toHaveLink('https://nederlandscasinos.net/payments/ideal-casino/')
        Ecopayz.click()
    });
    // Test 20 Check Klarna redirection link in Betalingen Widget//
    it('Check redirection to Klarna page  ', () => {
        const Klarna = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[3]');
        expect(Klarna).toHaveAttr('alt')
        expect(Klarna).toHaveLink('https://nederlandscasinos.net/payments/klarna/')
        Klarna.click()
    });
    // Test 21 Check Master Card redirection link in Betalingen Widget//
    it('Check redirection to Master Card page  ', () => {
        const masterCard = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[4]');
        expect(masterCard).toHaveAttr('alt')
        expect(masterCard).toHaveLink('https://nederlandscasinos.net/payments/mastercard/')
        masterCard.click()
    });
    // Test 22 Check Neteller redirection link in Betalingen Widget//
    it('Check redirection to Neteller page  ', () => {
        const Neteller = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[5]');
        expect(Neteller).toHaveAttr('alt')
        expect(Neteller).toHaveLink('https://nederlandscasinos.net/payments/neteller-casino/')
        Neteller.click()
    });
    // Test 23 Check Pay N Play redirection link in Betalingen Widget//
    it('Check redirection to Pay N Play', () => {
        const payNplay = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[6]');
        expect(payNplay).toHaveAttr('alt')
        expect(payNplay).toHaveLink('https://nederlandscasinos.net/payments/pay-n-play/')
        payNplay.click()
    });
    // Test 24 Check PayPass redirection link in Betalingen Widget//
    it('Check redirection to PayPass', () => {
        const payPass = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[7]');
        expect(payPass).toHaveAttr('alt')
        expect(payPass).toHaveLink('https://nederlandscasinos.net/payments/paypal/')
        payPass.click()
    });
    // Test 25 Check Trustly redirection link in Betalingen Widget//
    it('Check redirection to Trustly', () => {
        const Trustly = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[8]');
        expect(Trustly).toHaveAttr('alt')
        expect(Trustly).toHaveLink('https://nederlandscasinos.net/payments/trustly-casinos/')
        Trustly.click()
    });
    // Test 26 Check Visa redirection link in Betalingen Widget//
    it('Check redirection to Visa', () => {
        const Visa = $('/html/body/div/div/div/div[2]/aside/div[3]/div[2]/div/div[9]');
        expect(Visa).toHaveAttr('alt')
        expect(Visa).toHaveLink('https://nederlandscasinos.net/payments/trustly-casinos/')
        Visa.click()
    });
});