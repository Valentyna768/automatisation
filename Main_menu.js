describe('Main menue', () => {
     // Test 1 Verify header menu  - ���� ���� ������� ��� ��������� id? http://joxi.ru/KAxkWLaTvjW662  //
    it('verify header menu', () => {
    browser.url('https://nederlandscasinos.net/');
    const firstcolumnMenu = $('//*[@id="menu-item-5162"]/span[1]');
    expect(firstcolumnMenu).toHaveTextContaining('Online Casino')
    });
});