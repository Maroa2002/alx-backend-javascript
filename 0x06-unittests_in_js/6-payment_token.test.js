const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
  it("should return a resolved promise with {data: 'Successful response from the API' }", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
