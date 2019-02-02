/*
 * HomeReducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  image: null,
  imageObject: null,
  overlayObject: null,
  croppedImage: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.TYPE_SET_IMAGE_SUCCESS:
      return state
        .set('image', action.image)
        .set('imageObject', action.imageObject);
    case constants.TYPE_SET_OVERLAY_SUCCESS:
      return state.set('overlayObject', action.overlayObject);
    case constants.TYPE_SET_CROPPED_SUCCESS:
      return state.set('croppedImage', action.croppedImage);
    default:
      return state;
  }
}

export default homeReducer;
