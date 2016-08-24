import checked from  '../../public/src/components/index_components/checked';
describe('checkUserName test', ()=> {
  it('should return a true', ()=> {
    let input = 'h123124141';
    let result = checked.checkUserName(input);
    expect(result).toEqual(true);
  })
  it('should return a false', ()=> {
    let input = '@@@@@';
    let result = checked.checkUserName(input);
    expect(result).toEqual(false);
  })
  it('should return a false', ()=> {
    let input = '21';
    let result = checked.checkUserName(input);
    expect(result).toEqual(false);
  })
});

describe('checkUserPsd test', ()=> {
  it('should return a true', ()=> {
    let input = '1221312';
    let result = checked.checkUserPsd(input);
    expect(result).toEqual(true);
  })
  it('should return a false', ()=> {
    let input = '1111111111111111111111';
    let result = checked.checkUserPsd(input);
    expect(result).toEqual(false);
  })
});

describe('isEmpty test', ()=> {
  it('should return a true', ()=> {
    let input = '';
    let result = checked.isEmpty(input);
    expect(result).toEqual(true);
  })
  it('should return a false', ()=> {
    let input = '111111111111111111111';
    let result = checked.isEmpty(input);
    expect(result).toEqual(false);
  })
});

