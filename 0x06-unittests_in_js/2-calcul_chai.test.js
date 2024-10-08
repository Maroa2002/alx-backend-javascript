const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return 6 when inputs are SUM,1.4 and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 when inputs are SUBTRACT, 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 when inputs are DIVIDE, 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.closeTo(0.2, 0.0001);
  });

  it('should return Error when inputs are DIVIDE, 1.4 and 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for an unknown operation type', () => {
    expect(() => calculateNumber('MULTIPLY, 1, 2')).to.throw(Error, 'Unknown operation type');
  });
});
