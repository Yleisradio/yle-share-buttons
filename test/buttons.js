describe('Buttons', function() {

    beforeEach(function() {
        return browser.ignoreSynchronization = true;
    });

    it('Facebook button exists', function() {
        browser.get('/');
        var el = by.css('#yle-share-buttons-facebook');
        expect(browser.isElementPresent(el)).toBe(true);
    });

    it('Twitter button exists', function() {
        browser.get('/');
        var el = by.css('#yle-share-buttons-twitter');
        expect(browser.isElementPresent(el)).toBe(true);
    });

    it('LinkedIn button exists', function() {
        browser.get('/');
        var el = by.css('#yle-share-buttons-linkedin');
        expect(browser.isElementPresent(el)).toBe(true);
    });

    it('Google Plus button exists', function() {
        browser.get('/');
        var el = by.css('#yle-share-buttons-googleplus');
        expect(browser.isElementPresent(el)).toBe(true);
    });

    it('Pinterest button exists', function() {
        browser.get('/');
        var el = by.css('#yle-share-buttons-pinterest');
        expect(browser.isElementPresent(el)).toBe(true);
    });

});
