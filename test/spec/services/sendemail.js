'use strict';

describe('Service: sendEmail', function () {

  // load the service's module
  beforeEach(module('selectionApp'));

  // instantiate service
  var sendEmail;
  beforeEach(inject(function (_sendEmail_) {
    sendEmail = _sendEmail_;
  }));

  it('should do something', function () {
    expect(!!sendEmail).toBe(true);
  });

});
