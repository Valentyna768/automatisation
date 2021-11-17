describe('Payments block', () => {
    beforeEach(async function () {
        browser.url('https://nederlandscasinos.net/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check displaying of Payments block//
    it('Check displaying of Payments block', () => {
        const PaymentsBlock = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14)');
        expect(PaymentsBlock).toBeDisplayed()
    });
    // Test 2 Check the title is in h2//
    it('Test Check the title is in h2', () => {
        const BlockTitle = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > h2');
        expect(BlockTitle).toHaveAttribute('<h2, </h2>')
    });
    // Test 3 Displaying of Pyment 1, check alt for img, redirect to payment page//
    it('Displaying of Pyment 1, check alt for img, redirect to payment page', () => {
        const Payment1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(1) > div');
        expect(Payment1).toBeDisplayed()
        const Img1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(1) > div > div.bfad666 > div > img')
        expect(Img1).toHaveAttribute('alt=')
        const Button1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(1) > div > div.bfad666 > a')
        expect(Button1).toBeDisplayed
        expect(Button1).toHaveUrlContaining('/payments/telefoon-betalen/')
        Button1.click()
    });
    // Test 4 Displaying of Pyment 2, check alt for img, redirect to payment page//
    it('Displaying of Pyment 2, check alt for img, redirect to payment page', () => {
        const Payment2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(2) > div');
        expect(Payment2).toBeDisplayed()
        const Img2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(2) > div > div.bfad666 > div > img')
        expect(Img2).toHaveAttribute('alt=')
        const Button2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(2) > div > div.bfad666 > a')
        expect(Button2).toBeDisplayed
        expect(Button2).toHaveUrlContaining('/payments/ideal-casino/')
        Button2.click()
    });
    // Test 5 Displaying of Pyment 3, check alt for img, redirect to payment page//
    it('Displaying of Pyment 3, check alt for img, redirect to payment page', () => {
        const Payment3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(3) > div');
        expect(Payment3).toBeDisplayed()
        const Img3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(3) > div > div.bfad666 > div > img')
        expect(Img3).toHaveAttribute('alt=')
        const Button3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(3) > div > div.bfad666 > a')
        expect(Button3).toBeDisplayed
        expect(Button3).toHaveUrlContaining('/payments/debit-card/')
        Button3.click()
    });
    // Test 6 Displaying of Pyment 4, check alt for img, redirect to payment page//
    it('Displaying of Pyment 4, check alt for img, redirect to payment page', () => {
        const Payment4 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(4) > div');
        expect(Payment4).toBeDisplayed()
        const Img4 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(4) > div > div.bfad666 > div > img')
        expect(Img4).toHaveAttribute('alt=')
        const Button4 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(4) > div > div.bfad666 > a')
        expect(Button4).toBeDisplayed
        expect(Button4).toHaveUrlContaining('/payments/klarna/')
        Button4.click()
    });
    // Test 7 Displaying of Pyment 5, check alt for img, redirect to payment page//
    it('Displaying of Pyment 5, check alt for img, redirect to payment page', () => {
        const Payment5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(5) > div');
        expect(Payment5).toBeDisplayed()
        const Img5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(5) > div > div.bfad666 > div > img')
        expect(Img5).toHaveAttribute('alt=')
        const Button5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(5) > div > div.bfad666 > a')
        expect(Button5).toBeDisplayed
        expect(Button5).toHaveUrlContaining('/payments/pay-n-play/')
        Button5.click()
    });
    // Test 8 Displaying of Pyment 6, check alt for img, redirect to payment page//
    it('Displaying of Pyment 6, check alt for img, redirect to payment page', () => {
        const Payment6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(6) > div');
        expect(Payment6).toBeDisplayed()
        const Img6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(6) > div > div.bfad666 > div > img')
        expect(Img6).toHaveAttribute('alt=')
        const Button6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(14) > div > div > div:nth-child(6) > div > div.bfad666 > a')
        expect(Button6).toBeDisplayed
        expect(Button6).toHaveUrlContaining('/payments/trustly-casinos/')
        Button6.click()
    });
});
