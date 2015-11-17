describe('the signup app', function() {
    var emailInp =  element(by.model('user.email'));
    var lnameInp = element(by.model('user.lname'));
    var signUpBtn = element(by.buttonText('Sign Me Up!'));

    function testScript() {
        lnameInp.sendKeys('Lee');
        emailInp.sendKeys('thisisvalid@email.com');
        signUpBtn.click();
    }

   beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show proper validation error when last name is blank', function() {
        var requiredMsg = $('.lname-required-error');
        expect(requiredMsg.isPresent()).toEqual(false);
        lnameInp.sendKeys('Lee');
        lnameInp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        lnameInp.sendKeys('Lee');
        expect(requiredMsg.isPresent()).toEqual(false);

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

    it('must disable signup button when email is blank', function() {
        expect(signUpBtn.getAttribute('disabled')).toEqual('true');
        emailInp.sendKeys('student@uw.edu');
        lnameInp.sendKeys('Lee');
        expect(signUpBtn.getAttribute('disabled')).toEqual(null);
        emailInp.clear();
        expect(signUpBtn.getAttribute('disabled')).toEqual('true');
    });

    it('must disable signup button when email is invalid', function() {
        expect(signUpBtn.getAttribute('disabled')).toEqual('true');
        emailInp.sendKeys('student@uw.edu');
        lnameInp.sendKeys('Lee');
        expect(signUpBtn.getAttribute('disabled')).toEqual(null);
        emailInp.clear();
        emailInp.sendKeys('not a valid email');
        expect(signUpBtn.getAttribute('disabled')).toEqual('true');
    });

    it('must display confirmation message when submitted', function() {
        var submitMsg = $('.alert-success');
        expect(submitMsg.isDisplayed()).toEqual(false);
        testScript();
        expect(submitMsg.isDisplayed()).toEqual(true);
    });


});