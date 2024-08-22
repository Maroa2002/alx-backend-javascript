const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

describe('Index Page', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('Correct status code when id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when id is NOT a number (should return 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', () => {
  it('Returns correct payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) return done(error);
      const expectedRes = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        },
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedRes);
      done();
    });
  });
});

describe('login', () => {
  it('Returns correct welcome message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      json: { userName: 'George'},
    };
    request.post(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome George');
      done();
    });
  });
}); 