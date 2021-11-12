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
        expect(Cta3).toHaveUrlContaining('/gokkasten/bigger-bass-bonanza/"')
        Cta3.click()
    });
});
