describe('the signup app', function() {
    var emailInp =  element(by.model('user.email'));
    var dobInp = element(by.model('user.dob'));

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

    it('must show proper validation error for blank dob', function() {
        var dob = $('.dob-required-error');
        expect(dob.isPresent()).toEqual(false);
        dobInp.sendKeys('10/21/1998');
        dobInp.clear();
        expect(dob.isPresent()).toEqual(true);
        dobInp.sendKeys('10/21/1998');
        expect(dob.isPresent()).toEqual(false);
    });

    it('must show proper validation error for dob format', function() {
        var dob = $('.dob-format-error');
        expect(dob.isPresent()).toEqual(false);
        dobInp.sendKeys('this is not a valid dob');
        expect(dob.isPresent()).toEqual(true);
        dobInp.clear();
        expect(dob.isPresent()).toEqual(false);
        dobInp.sendKeys('10/21/1998');
        expect(dob.isPresent()).toEqual(false);
    });

    it('must show proper validation error for youngness and invalid dates', function() {
        var dob = $('.dob-young-error');
        expect(dob.isPresent()).toEqual(false);
        var tyaPlus1 = new Date();
        tyaPlus1.setFullYear(tyaPlus1.getFullYear() - 13);
        tyaPlus1.setDate(tyaPlus1.getDate());
        var month = String(tyaPlus1.getMonth() + 1); // +1 because it thinks it's october???
        if (month.length === 1) {
            month = '0' + month;
        }
        var day = String(tyaPlus1.getDate() + 1);
        if (day.length === 1) {
            day = '0' + day;
        }
        var year = String(tyaPlus1.getFullYear());
        dobInp.sendKeys(month + '/' + day + '/' + year);
        //dobInp.sendKeys('11/17/2002'); //just in case
        expect(dob.isPresent()).toEqual(true);
        dobInp.clear();
        dobInp.sendKeys('10/21/1998');
        expect(dob.isPresent()).toEqual(false);

        // invalid dates
        dobInp.clear();
        dobInp.sendKeys('20/21/1998');
        expect(dob.isPresent()).toEqual(true);

        dobInp.clear();
        expect(dob.isPresent()).toEqual(false);
    });
});