describe('Redirect', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    it('click on top1 cart and redirect to brand page', async() => {
        const top1cart = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.casino-cards-box.bfad7e8 > div > div:nth-child(1) > div');
        top1cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6512&location=https://nederlandscasinos.net/&cid=1313767433.1636014210&element=cta_cart_block')
          await browser.setTimeout({
            'pageLoad': 10000,
            'script': 60000
        });
    });
});
