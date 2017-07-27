var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require('cucumber');

defineSupportCode(function(context) {
  var setWorldConstructor = context.setWorldConstructor;
  var Given = context.Given
  var When = context.When
  var Then = context.Then

  ///// Your World /////
  //
  // Call 'setWorldConstructor' with to your custom world (optional)
  //

  var CustomWorld = function() {};

  CustomWorld.prototype.variable = 0;

  CustomWorld.prototype.setTo = function(number) {
    this.variable = parseInt(number);
  };

  CustomWorld.prototype.incrementBy = function(number) {
    this.variable += parseInt(number);
  };

  setWorldConstructor(CustomWorld);

  ///// Your step definitions /////
  //
  // use 'Given', 'When' and 'Then' to declare step definitions
  //

  Given(/^a variable set to (\d+)$/, function(number) {
    this.setTo(number);
  });

  When(/^I increment the variable by (\d+)$/, function(number) {
    this.incrementBy(number);
  });

  Then(/^the variable should contain (\d+)$/, function(number) {
    if (this.variable != parseInt(number))
      throw new Error('Variable should contain ' + number +
        ' but it contains ' + this.variable + '.');
  });
})
