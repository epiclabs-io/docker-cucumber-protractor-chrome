var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	//Google doesn't have Angular!
	browser.ignoreSynchronization = true
    Given('I am at {stringInDoubleQuotes}', function (stringInDoubleQuotes) {

        return browser.get(stringInDoubleQuotes);
    });

    When('I search {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
    	return element(by.css('input[name="q"]')).clear().sendKeys(stringInDoubleQuotes).sendKeys(protractor.Key.ENTER);
    });

    Then('I should see {int} results', function (int) {
    	return expect(element.all(by.css('div.g')).count()).to.eventually.equal(int);
    });

})
