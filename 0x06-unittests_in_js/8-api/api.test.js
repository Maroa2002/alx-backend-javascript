const request = require('request');
const { expect } = require('chai');

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
