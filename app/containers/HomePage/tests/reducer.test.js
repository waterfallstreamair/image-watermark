import { fromJS } from 'immutable';

import homeReducer from '../reducer';
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      image: null,
      imageObject: null,
      overlayObject: null,
      croppedImage: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });
});
