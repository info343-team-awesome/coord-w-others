describe('the signup app', function() {
    var emailInp =  element(by.model('user.email'));

   beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show proper validation error for blank email', function() {
        var requiredMsg = $('.email-required-error');
        expect(requiredMsg.isPresent()).toEqual(false);
        emailInp.sendKeys('student@uw.edu');
        emailInp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        emailInp.sendKeys('student@uw.edu');
        expect(requiredMsg.isPresent()).toEqual(false);
    });

    it('must show proper validation error when email is invalid', function() {
        var requiredMsg = $('.email-valid-error');
        expect(requiredMsg.isPresent()).toEqual(false);
        emailInp.sendKeys('this is not a valid email');
        expect(requiredMsg.isPresent()).toEqual(true);
        emailInp.clear();
        emailInp.sendKeys('thisisvalid@email.com');
        expect(requiredMsg.isPresent()).toEqual(false);
    });
});