const multiBracketValidation = require('../challenges/multiBracketValidation/multiBracketValidation');

// {}	TRUE
// {}(){}	TRUE
// ()[[Extra Characters]]	TRUE
// (){}[[]]	TRUE
// {}{Code}[Fellows](())	TRUE
// [({}]	FALSE
// (](	FALSE
// {(})	FALSE


describe('multiBracketValidation operation', () => {
  it('returns true for: {}', () => {
    expect(multiBracketValidation('{}')).toBeTruthy();
  });
  it('returns true for: {}(){}', () => {
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
  });
  it('returns true for: ()[[Extra Characters]]', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
  });
  it('returns true for: (){}[[]]', () => {
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
  });
  it('returns true for: {}{Code}[Fellows](())', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });
  it('returns false for: [({}]', () => {
    expect(multiBracketValidation('[({}]')).toBeFalsy();
  });
  it('returns false for: (](', () => {
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
  it('returns false for: {(})', () => {
    expect(multiBracketValidation('{(})')).toBeFalsy();
  });
  it('returns false for: )(', () => {
    expect(multiBracketValidation(')(')).toBeFalsy();
  });
  it('returns false for: \'\'', () => {
    expect(multiBracketValidation('')).toBeFalsy();
  });
});
