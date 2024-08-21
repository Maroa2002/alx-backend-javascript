const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // set up the spy before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
