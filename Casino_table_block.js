
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
    it('click on top1 cart and redirect to brand page', async () => {
        const top1cart = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.casino-cards-box.bfad7e8 > div > div:nth-child(1) > div');
        top1cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6512&location=https://nederlandscasinos.net/&cid=1313767433.1636014210&element=cta_cart_block')
    });
    // Test 5  Check click on top1 cart logo and redirect to brand//
    it('click on top1 logo and redirect to brand ', async () => {
        const top1logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[1]/img');
        top1logo.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6512&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_logo')
    });
    // Test 6  Check click on top1 cart cta and redirect to brand//
    it('click on top1 cta and redirect to brand ', async () => {
        const top1cta = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[5]/button');
        top1cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6512&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_button')
    });
    // Test 7  show Casino logo and alt in top1//
    it('show Casino logo and alt in top1', () => {
        const top1Logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[1]/img');
        expect(top1Logo).toBeDisplayed()
        expect(top1Logo).toHaveAttributeContaining('alt')
    });
    // Test 8  show bonus in top1//
    it('show bonus in top1', () => {
        const bonusTop1 = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[2]');
        expect(bonusTop1).toHaveTextContaining('€500 + 225 Gratis Spins')
    });
    // Test 9  show Casino raiting stars in Top1//
    it('show Casino raiting stars in Top1', () => {
        const top1raiting = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[3]/span');
        expect(top1raiting).toBeDisplayed()
    });
    // Test 10  Check click on top1 cart cta review and redirect to review page//
    it('click on top1 cart cta review and redirect to review page ', () => {
        const top1cartreview = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[5]/a');
        expect(top1cartreview).toHaveUrlContaining('/review/casinowin-bet/')
        top1cartreview.click()
    });
    // Test 11  show Casino payments block in Top1//
    it('show Casino payments block in Top1', () => {
        const top1payments = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[4]/div');
        expect(top1payments).toBeDisplayed()
    });
    // Test 12  Check top2 cart displaying in Casino Table//
    it('Check Top 2 cart displaying ', () => {
        const top2 = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]');
        expect(top2).toBeDisplayed()
    });
    // Test 13  Check click on top2 cart and redirect to brand//
    it('click on top2 cart and redirect to brand ', async () => {
        const top2cart = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div');
        top2cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7585&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_block')
    });
    // Test 14  Check click on top2 cart logo and redirect to brand//
    it('click on top2 logo and redirect to brand ', async () => {
        const top2logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[1]');
        top2logo.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7585&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_logo')
    });
    // Test 15  Check click on top2 cart cta and redirect to brand//
    it('click on top2 cta and redirect to brand ', async () => {
        const top2cta = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[5]/button');
        top2cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7585&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_button')
    });
    // Test 16  show Casino logo and alt in top2//
    it('show Casino logo and alt in top2', () => {
        const top2Logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[1]/img');
        expect(top2Logo).toBeDisplayed()
        expect(top2Logo).toHaveAttributeContaining('alt')
    });
    // Test 17  show bonus in top2//
    it('show bonus in top1', () => {
        const bonusTop2 = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[2]/p');
        expect(bonusTop2).toHaveTextContaining('400% tot €2000')
    });
    // Test 18  show Casino raiting stars in top2//
    it('show Casino raiting stars in top2', () => {
        const top2raiting = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[3]/span');
        expect(top2raiting).toBeDisplayed()
    });
    // Test 19  Check click on top2 cart cta review and redirect to review page//
    it('click on top2 cart cta review and redirect to review page ', () => {
        const top2cartreview = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[5]/a');
        expect(top2cartreview).toHaveUrlContaining('review/olympus-play-casino/')
        top2cartreview.click()
    });
    // Test 20  show Casino payments block in cart2//
    it('show Casino payments block', () => {
        const top2payments = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[2]/div/div[4]/div');
        expect(top2payments).toBeDisplayed()
    });
    // Test 21  Check top3 cart displaying in Casino Table//
    it('Check Top 3 cart displaying ', () => {
        const top3 = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]');
        expect(top3).toBeDisplayed()
    });
    // Test 22  Check click on top3 cart and redirect to brand//
    it('click on top3 cart and redirect to brand ', async () => {
        const top3cart = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div');
        top3cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7599&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_block')
    });
    // Test 23 Check click on top3 cart logo and redirect to brand//
    it('click on top3 logo and redirect to brand ', async () => {
        const top3logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[1]');
        top3logo.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7599&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_logo')
    });
    // Test 24 Check click on top3 cart cta and redirect to brand//
    it('click on top3 cta and redirect to brand ', async () => {
        const top3cta = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[5]/button');
        top3cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7599&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_cart_button')
    });
    // Test 25 show Casino logo and alt in top3//
    it('show Casino logo and alt in top1', () => {
        const top3Logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[1]/img');
        expect(top3Logo).toBeDisplayed()
        expect(top3Logo).toHaveAttributeContaining('alt')
    });
    // Test 26 show bonus in top3//
    it('show bonus in top3', () => {
        const bonusTop3 = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[2]/p');
        expect(bonusTop3).toHaveTextContaining('€500 + 150 gratis spins')
    });
    // Test 27 show Casino raiting stars in Top3//
    it('show Casino raiting stars in Top3', () => {
        const top3raiting = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[3]/span');
        expect(top3raiting).toBeDisplayed()
    });
    // Test 28 Check click on top3 cart cta review and redirect to review page//
    it('click on top3 cart cta review and redirect to review page ', () => {
        const top3cartreview = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[5]/a');
        expect(top3cartreview).toHaveUrlContaining('review/pino-casino/')
        top3cartreview.click()
    });
    // Test 29 show Casino payments block in Top3//
    it('show Casino payments block in Top3', () => {
        const top3payments = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[3]/div/div[4]/div');
        expect(top3payments).toBeDisplayed()
    });
    // Test 30 show hat in Casino table block //
    it('displaying hat in Casino table block', () => {
        const blockHat = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[1]');
        expect(blockHat).toBeDisplayed()
    });
    // Test 31  Check row 4 in Casino Table//
    it('Check row 4 displaying in Casino Table ', () => {
        const row4 = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]');
        expect(row4).toBeDisplayed()
    });
    // Test 32  Check click on row 4 and redirect to brand//
    it('click on row 4 and redirect to brand ', async () => {
        const row4cart = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]');
        row4cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7601&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_row')
    });
    // Test 33  Check click on row 4 logo and redirect to brand//
    it('click on row 4 logo and redirect to brand ', async () => {
        const row4logoclick = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]/div[2]');
        row4logoclick.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7601&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_logo')
    });
    // Test 34  Check click on row 4 cta and redirect to brand//
    it('click on row 4 cta and redirect to brand ', async () => {
        const row4cta = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]/div[7]/button');
        row4cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7601&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_button')
    });
    // Test 35  show Casino logo and alt in row4//
    it('show Casino logo and alt in row4', () => {
        const row4Logo = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]/div[2]/div');
        expect(row4Logo).toBeDisplayed()
        expect(row4Logo).toHaveAttributeContaining('alt')
    });
    // Test 36  show bonus in row4//
    it('show bonus in row4', () => {
        const bonusRow4 = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]/div[4]/span');
        expect(bonusRow4).toHaveTextContaining(' tot €150 + 150 gratis spins ')
    });
    // Test 37  show Casino raiting stars in row4//
    it('show Casino raiting stars in row4', () => {
        const row4raiting = $('/html/body/div/div/div/div[1]/main/section[1]/div[1]/div/div[1]/div/div[3]/span');
        expect(row4raiting).toBeDisplayed()
    });
    // Test 38  Check click on row4 cta review and redirect to review page//
    it('click on row4 cta review and redirect to review page ', () => {
        const row4cartreview = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(1) > div.bfad5db.bfad1c2.bfad9377 > a');
        expect(row4cartreview).toHaveUrlContaining('/review/dux-slots-casino/')
        row4cartreview.click()
    });
    // Test 39  show Casino payments block in row4//
    it('show Casino payments block in row4', () => {
        const row4payments = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(1) > div.bfad5db.bfad38c');
        expect(row4payments).toBeDisplayed()
    });
    // Test 40  Check row 5 in Casino Table//
    it('Check row 5 displaying in Casino Table ', () => {
        const row5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2)');
        expect(row5).toBeDisplayed()
    });
    // Test 41  Check click on row 5 and redirect to brand//
    it('click on row 5 and redirect to brand ', async () => {
        const row5cart = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2)');
        row5cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6429&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_row')
    });
    // Test 42  Check click on row 5 logo and redirect to brand//
    it('click on row 5 logo and redirect to brand ', async () => {
        const row5logoclick = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]/div[2]');
        row5logoclick.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6429&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_logo')
    });
    // Test 43  Check click on row 5 cta and redirect to brand//
    it('click on row 5 cta and redirect to brand ', async () => {
        const row5cta = $('/html/body/div/div/div/div[1]/main/section[1]/div[2]/div/div/div[2]/div[1]/div[7]/button');
        row5cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=6429&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_button')
    });
    // Test 44  show Casino logo and alt in row5//
    it('show Casino logo and alt in row5', () => {
        const row5Logo = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2) > div.bfad5db.bfad2af > div > img');
        expect(row5Logo).toBeDisplayed()
        expect(row5Logo).toHaveAttributeContaining('alt')
    });
    // Test 45  show bonus in row4//
    it('show bonus in row5', () => {
        const bonusRow5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2) > div.bfad5db.bfadb04 > span');
        expect(bonusRow5).toHaveTextContaining('€1000 + 100 Gratis Spins')
    });
    // Test 46  show Casino raiting stars in row5//
    it('show Casino raiting stars in row5', () => {
        const row5raiting = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2) > div.bfad5db.bfaddb5 > span');
        expect(row5raiting).toBeDisplayed()
    });
    // Test 47  Check click on row5 cta review and redirect to review page//
    it('click on row5 cta review and redirect to review page ', () => {
        const row5cartreview = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2) > div.bfad5db.bfad1c2.bfad9377 > a');
        expect(row5cartreview).toHaveUrlContaining('/review/casinorex/')
        row5cartreview.click()
    });
    // Test 48  show Casino payments block in row5//
    it('show Casino payments block in row5', () => {
        const row5payments = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(2) > div.bfad5db.bfad38c');
        expect(row5payments).toBeDisplayed()
    });
    // Test 49  Check row 6 in Casino Table//
    it('Check row 6 displaying in Casino Table ', () => {
        const row6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3)');
        expect(row6).toBeDisplayed()
    });
    // Test 50  Check click on row 6 and redirect to brand//
    it('click on row 6 and redirect to brand ', async () => {
        const row6cart = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3)');
        row6cart.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7527&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_row')
    });
    // Test 51  Check click on row 6 logo and redirect to brand//
    it('click on row 6 logo and redirect to brand ', async () => {
        const row6logoclick = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfad2af');
        row6logoclick.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7527&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_logo')
    });
    // Test 52  Check click on row 6 cta and redirect to brand//
    it('click on row 6 cta and redirect to brand ', async () => {
        const row6cta = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfad1c2.bfad9377 > button');
        row6cta.click()
        await browser.newWindow('https://nederlandscasinos.net/to-casino/?id=7527&location=https://nederlandscasinos.net/&cid=1359577313.1636535476&element=cta_table_button')
    });
    // Test 53  show Casino logo and alt in row6//
    it('show Casino logo and alt in row6', () => {
        const row6Logo = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfad2af > div > img');
        expect(row6Logo).toBeDisplayed()
        expect(row6Logo).toHaveAttributeContaining('alt')
    });
    // Test 54  show bonus in row6//
    it('show bonus in row6', () => {
        const bonusRow6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfadb04 > span');
        expect(bonusRow6).toHaveTextContaining('€1000+200 Gratis Spins')
    });
    // Test 55  show Casino raiting stars in row6//
    it('show Casino raiting stars in row6', () => {
        const row6raiting = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfaddb5 > span');
        expect(row6raiting).toBeDisplayed()
    });
    // Test 56  Check click on row6 cta review and redirect to review page//
    it('click on row6 cta review and redirect to review page ', () => {
        const row6cartreview = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfad1c2.bfad9377 > a');
        expect(row6cartreview).toHaveUrlContaining('/review/king-billy-casino/')
        row6cartreview.click()
    });
    // Test 57  show Casino payments block in row6//
    it('show Casino payments block in row6', () => {
        const row6payments = $('body > div > div > div > div.bfad93f > main > section:nth-child(1) > div.js-ajax-casino-table > div > div > div.js-fragment-table-body.bfadee4 > div:nth-child(3) > div.bfad5db.bfad38c');
        expect(row6payments).toBeDisplayed()
    });
});
