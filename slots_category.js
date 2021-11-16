describe('Slots category block', () => {
    beforeEach(function () {
        browser.url('https://nederlandscasinos.net/');
    });
    // Test 1  Check displaying of Slots category block//
    it('Check displaying of Slots category block', () => {
        const SlotCatBlock = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9)');
        expect(SlotCatBlock).toBeDisplayed()
    });
    // Test 2 Check the title is in h2//
    it('Test Check the title is in h2', () => {
        const BlockTitle = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > h2');
        expect(BlockTitle).toHaveAttribute('<h2, </h2>')
    });
    // Test 3 Check displaying of 1 slot//
    it('Test Check displaying of 1 slot', () => {
        const Slot1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(1)');
        expect(Slot1).toBeDisplayed()
    });
     // Test 4 Check displaying of title in 1 slot//
    it('Check displaying of title in 1 slot', () => {
        const TitleSlot1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(1) > div > div.bfadb11.pseudo-link-js > div.bfadddd2.bfad889 > span')
        expect(TitleSlot1).toBeDisplayed()
        expect(TitleSlot1).toHaveTextContaining('Book of Dead online casino slot')
    });
    // Test 5 Check displaying of raiting in 1 slot//
    it('Check displaying of raiting in 1 slot', () => {
        const SlotRaiting1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(1) > div > div.bfadb11.pseudo-link-js > div.bfad0c6')
        expect(SlotRaiting1).toBeDisplayed()
    });
    // Test 6 Check displaying of Technology and Theme fields in 1 slot//
    it('Check displaying of Technology and Theme fields in 1 slot', () => {
        const Thechnology1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(1) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-technology.bfad8f0e')
        expect(Thechnology1).toBeDisplayed()
        const Theme1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(1) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-theme.bfad8f0e')
        expect(Theme1).toBeDisplayed()
    });
    // Test 7 Check cta and redirect from slot 1//
    it('Check cta and redirect from slot 1', () => {
        const Cta1 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(1) > div > div.bfadb11.pseudo-link-js > a')
        expect(Cta1).toBeDisplayed()
        expect(Cta1).toHaveUrlContaining('/gokkasten/book-of-dead/')
        Cta1.click()
    });
    // Test 7 Check displaying of 2 slot//
    it('Test Check displaying of 2 slot', () => {
        const Slot2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(2)');
        expect(Slot2).toBeDisplayed()
    });
    // Test 8 Check displaying of title in 2 slot//
    it('Check displaying of title in 2 slot', () => {
        const TitleSlot2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(2) > div > div.bfadb11.pseudo-link-js > div.bfadddd2.bfad889 > span')
        expect(TitleSlot2).toBeDisplayed()
        expect(TitleSlot2).toHaveTextContaining('The Magic Cauldron online casino slot')
    });
    // Test 9 Check displaying of raiting in 2 slot//
    it('Check displaying of raiting in 1 slot', () => {
        const SlotRaiting2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(2) > div > div.bfadb11.pseudo-link-js > div.bfad0c6')
        expect(SlotRaiting2).toBeDisplayed()
    });
    // Test 10 Check displaying of Technology and Theme fields in 2 slot//
    it('Check displaying of Technology and Theme fields in 1 slot', () => {
        const Thechnology2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(2) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-technology.bfad8f0e')
        expect(Thechnology2).toBeDisplayed()
        const Theme2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(2) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-theme.bfad8f0e')
        expect(Theme2).toBeDisplayed()
    });
    // Test 11 Check cta and redirect from slot 2//
    it('Check cta and redirect from slot 1', () => {
        const Cta2 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(2) > div > div.bfadb11.pseudo-link-js > a')
        expect(Cta2).toBeDisplayed()
        expect(Cta2).toHaveUrlContaining('/gokkasten/the-magic-cauldron/"')
        Cta2.click()
    });
    // Test 12 Check displaying of 3 slot//
    it('Test Check displaying of 3 slot', () => {
        const Slot3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(3)');
        expect(Slot3).toBeDisplayed()
    });
    // Test 13 Check displaying of title in 3 slot//
    it('Check displaying of title in 3 slot', () => {
        const TitleSlot3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(3) > div > div.bfadb11.pseudo-link-js > div.bfadddd2.bfad889 > span')
        expect(TitleSlot3).toBeDisplayed()
        expect(TitleSlot3).toHaveTextContaining(' Bigger Bass Bonanza online casino slot ')
    });
    // Test 14 Check displaying of raiting in 3 slot//
    it('Check displaying of raiting in 3 slot', () => {
        const SlotRaiting3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(3) > div > div.bfadb11.pseudo-link-js > div.bfad0c6')
        expect(SlotRaiting3).toBeDisplayed()
    });
    // Test 15 Check displaying of Technology and Theme fields in 3 slot//
    it('Check displaying of Technology and Theme fields in 3 slot', () => {
        const Thechnology3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(3) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-technology.bfad8f0e')
        expect(Thechnology3).toBeDisplayed()
        const Theme3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(3) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-theme.bfad8f0e')
        expect(Theme3).toBeDisplayed()
    });
    // Test 16 Check cta and redirect from slot 3//
    it('Check cta and redirect from slot 3', () => {
        const Cta3 = $('body > div.bfad424 > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(3) > div > div.bfadb11.pseudo-link-js > a')
        expect(Cta3).toBeDisplayed()
        expect(Cta3).toHaveUrlContaining('/gokkasten/bigger-bass-bonanza/')
        Cta3.click()
    });
    // Test 17 Check displaying of 4 slot//
    it('Test Check displaying of 4 slot', () => {
        const Slot4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(4)');
        expect(Slot4).toBeDisplayed()
    });
    // Test 18 Check displaying of title in 4 slot//
    it('Check displaying of title in 4 slot', () => {
        const TitleSlot4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(4) > div > div.bfadb11.pseudo-link-js > div.bfadddd2.bfad889 > span')
        expect(TitleSlot4).toBeDisplayed()
        expect(TitleSlot4).toHaveTextContaining('Wolf Gold online casino slot')
    });
    // Test 19 Check displaying of raiting in 4 slot//
    it('Check displaying of raiting in 4 slot', () => {
        const SlotRaiting4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(4) > div > div.bfadb11.pseudo-link-js > div.bfad0c6')
        expect(SlotRaiting4).toBeDisplayed()
    });
    // Test 20 Check displaying of Technology and Theme fields in 4 slot//
    it('Check displaying of Technology and Theme fields in 3 slot', () => {
        const Thechnology4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(4) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-technology.bfad8f0e')
        expect(Thechnology4).toBeDisplayed()
        const Theme4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(4) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-theme.bfad8f0e')
        expect(Theme4).toBeDisplayed()
    });
    // Test 21 Check cta and redirect from slot 4//
    it('Check cta and redirect from slot 4', () => {
        const Cta4 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(4) > div > div.bfadb11.pseudo-link-js > a')
        expect(Cta4).toBeDisplayed()
        expect(Cta4).toHaveUrlContaining('/gokkasten/wolf-gold/')
        Cta4.click()
    });
    // Test 22 Check displaying of 5 slot//
    it('Test Check displaying of 5 slot', () => {
        const Slot5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(5)');
        expect(Slot5).toBeDisplayed()
    });
    // Test 23 Check displaying of title in 5 slot//
    it('Check displaying of title in 5 slot', () => {
        const TitleSlot5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(5) > div > div.bfadb11.pseudo-link-js > div.bfadddd2.bfad889 > span')
        expect(TitleSlot5).toBeDisplayed()
        expect(TitleSlot5).toHaveTextContaining('Book of Demi Gods III online casino slot')
    });
    // Test 24 Check displaying of raiting in 5 slot//
    it('Check displaying of raiting in 5 slot', () => {
        const SlotRaiting5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(5) > div > div.bfadb11.pseudo-link-js > div.bfad0c6')
        expect(SlotRaiting5).toBeDisplayed()
    });
    // Test 25 Check displaying of Technology and Theme fields in 5 slot//
    it('Check displaying of Technology and Theme fields in 5 slot', () => {
        const Thechnology5 = $('<div class="slots-card-data-wrapper-technology bfad8f0e"><div class="bfad5c91"> <span>Technology</span></div><div class="bfad401"> <span class="bfad0e2"> Flash, HTML5 </span></div></div>')
        expect(Thechnology5).toBeDisplayed()
        const Theme5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(5) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-theme.bfad8f0e')
        expect(Theme5).toBeDisplayed()
    });
    // Test 26 Check cta and redirect from slot 5//
    it('Check cta and redirect from slot 5', () => {
        const Cta5 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(5) > div > div.bfadb11.pseudo-link-js > a')
        expect(Cta5).toBeDisplayed()
        expect(Cta5).toHaveUrlContaining('/gokkasten/book-of-demi-gods-3/')
        Cta5.click()
    });
    // Test 27 Check displaying of 6 slot//
    it('Test Check displaying of 6 slot', () => {
        const Slot6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(6)');
        expect(Slot6).toBeDisplayed()
    });
    // Test 28 Check displaying of title in 6 slot//
    it('Check displaying of title in 6 slot', () => {
        const TitleSlot6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(6) > div > div.bfadb11.pseudo-link-js > div.bfadddd2.bfad889 > span')
        expect(TitleSlot6).toBeDisplayed()
        expect(TitleSlot6).toHaveTextContaining('Story of the Samurai online casino slot')
    });
    // Test 29 Check displaying of raiting in 6 slot//
    it('Check displaying of raiting in 6 slot', () => {
        const SlotRaiting6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(6) > div > div.bfadb11.pseudo-link-js > div.bfad0c6')
        expect(SlotRaiting6).toBeDisplayed()
    });
    // Test 30 Check displaying of Technology and Theme fields in 6 slot//
    it('Check displaying of Technology and Theme fields in 6 slot', () => {
        const Thechnology6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(6) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-technology.bfad8f0e')
        expect(Thechnology6).toBeDisplayed()
        const Theme6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(6) > div > div.bfadb11.pseudo-link-js > div.bfade65 > div.slots-card-data-wrapper-theme.bfad8f0e')
        expect(Theme6).toBeDisplayed()
    });
    // Test 31 Check cta and redirect from slot 6//
    it('Check cta and redirect from slot 6', () => {
        const Cta6 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(6) > div > div.bfadb11.pseudo-link-js > a')
        expect(Cta6).toBeDisplayed()
        expect(Cta6).toHaveUrlContaining('/gokkasten/story-of-the-samurai/')
        Cta6.click()
    });
    // Test 32 Click on show more button and open next slots//
    it('Click on show more button and open next slots', async () => {
        const ShowMore = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.bfadef3.load-more-wrapper > span')
        expect(ShowMore).toBeDisplayed()
        ShowMore.click()
        const ShowMore = await $$('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(7)');
        const Slot7 = await elem[1].nextElement()
        console.log(await nextElement.getText()); // outputs: "Sibling Three"
    });
        // Test 32 Click on show more button and open next slots//
    it('Click on show more button and open next slots', async () => {
        const ShowMore = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.bfadef3.load-more-wrapper > span')
        expect(ShowMore).toBeDisplayed()
        ShowMore.click()
        browser.setTimeout({ timeout: 10000 })
        const slot7 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(7)')
        expect(slot7).toBeDisplayed()
        const slot8 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(8)')
        expect(slot8).toBeDisplayed()
        const slot9 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(9)')
        expect(slot9).toBeDisplayed()
        const slot10 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(10)')
        expect(slot10).toBeDisplayed()
        const slot11 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(11)')
        expect(slot11).toBeDisplayed()
        const slot12 = $('body > div > div > div > div.bfad93f > main > section:nth-child(9) > div > div > div.js-fragment-table-body.bfad15b > div:nth-child(12)')
        expect(slot12).toBeDisplayed()
    });
});
