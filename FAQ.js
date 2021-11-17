describe('FAQ', () => {
    beforeEach(async function () {
        browser.url('https://nederlandscasinos.net/');
        browser.setWindowSize(1440, 1079);
    });
    // Test 1  Check displaying of Author block and h2 in title //
    it('Check displaying of Author block and h2 in title', async () => {
        const faqBlock = $('body > div > div > div > div.bfad93f > main > section:nth-child(26)');
        expect(faqBlock).toBeDisplayed()
        const faqTitle = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > h2')
        expect(faqTitle).toHaveAttrContaining('<h2, </h2>')
    });
    // Test 2  Check questions and answers //
    it('Check questions and answers', async () => {
        browser.setTimeout({ timeout: 10000 })
        const question1 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl.active.bfad275.js-faq-block > div');
        expect(question1).toBeDisplayed
        expect(question1).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question1.click()
        const answer1 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl.active.bfad275.js-faq-block > div > div')
        expect(answer1).toBeDisplayed
        expect(answer1).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer1.click
    //QA 2//
        const question2 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(2) > div');
        expect(question2).toBeDisplayed
        expect(question2).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question2.click()
        const answer2 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(2) > div > div')
        expect(answer2).toBeDisplayed
        expect(answer2).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer2.click
    //QA 3//
        const question3 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(3) > div');
        expect(question3).toBeDisplayed
        expect(question3).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question3.click()
        const answer3 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(3) > div > div')
        expect(answer3).toBeDisplayed
        expect(answer3).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer3.click
    //QA 4//
        const question4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(4) > div');
        expect(question4).toBeDisplayed
        expect(question4).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question4.click()
        const answer4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(4) > div > div')
        expect(answer4).toBeDisplayed
        expect(answer4).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer4.click
    //QA 5//
        const question5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(5) > div');
        expect(question5).toBeDisplayed
        expect(question5).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question5.click()
        const answer5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(5) > div > div')
        expect(answer5).toBeDisplayed
        expect(answer5).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer5.click
    //QA 6//
        const question6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(6) > div');
        expect(question6).toBeDisplayed
        expect(question6).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question6.click()
        const answer6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(6) > div > div')
        expect(answer6).toBeDisplayed
        expect(answer6).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer6.click
    //QA 7//
        const question7 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(7) > div');
        expect(question7).toBeDisplayed
        expect(question7).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question7.click()
        const answer7 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(7) > div > div')
        expect(answer7).toBeDisplayed
        expect(answer7).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer7.click
    //QA 8//
        const question8 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(8) > div');
        expect(question8).toBeDisplayed
        expect(question8).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question8.click()
        const answer8 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(8) > div > div')
        expect(answer8).toBeDisplayed
        expect(answer8).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer8.click
    //QA 9 //
        const question9 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(9) > div');
        expect(question9).toBeDisplayed
        expect(question9).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question9.click()
        const answer9 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(9) > div > div')
        expect(answer9).toBeDisplayed
        expect(answer9).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer9.click
    //QA 10//
        const question10 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(10) > div');
        expect(question10).toBeDisplayed
        expect(question10).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question10.click()
        const answer10 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(10) > div > div')
        expect(answer10).toBeDisplayed
        expect(answer10).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer10.click
    //QA 11//
        const question11 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(11) > div');
        expect(question11).toBeDisplayed
        expect(question11).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question11.click()
        const answer11 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(11) > div > div')
        expect(answer11).toBeDisplayed
        expect(answer11).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer11.click
    //QA 12//
        const question12 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(12) > div');
        expect(question12).toBeDisplayed
        expect(question12).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question12.click()
        const answer12 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(12) > div > div')
        expect(answer12).toBeDisplayed
        expect(answer12).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer12.click
    //QA 13//
        const question13 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(13) > div');
        expect(question13).toBeDisplayed
        expect(question13).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question13.click()
        const answer13 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(13) > div > div')
        expect(answer13).toBeDisplayed
        expect(answer13).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer13.click
    //QA 14//
        const question14 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(14) > div');
        expect(question14).toBeDisplayed
        expect(question14).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question14.click()
        const answer14 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(14) > div > div')
        expect(answer14).toBeDisplayed
        expect(answer14).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer14.click
    //QA 15//
        const question15 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(15) > div');
        expect(question15).toBeDisplayed
        expect(question15).toHaveAttrContaining('itemtype="https://schema.org/Question"')
        question15.click()
        const answer15 = $('body > div > div > div > div.bfad93f > main > section:nth-child(26) > div > div > dl:nth-child(15) > div > div')
        expect(answer15).toBeDisplayed
        expect(answer15).toHaveAttrContaining('itemtype="https://schema.org/Answer"')
        answer15.click
    });
});
