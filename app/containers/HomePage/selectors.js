/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectImage = () =>
  createSelector(selectHome, homeState => homeState.get('image'));

const makeSelectCroppedImage = () =>
  createSelector(selectHome, homeState => homeState.get('croppedImage'));

const makeSelectImageObject = () =>
  createSelector(selectHome, homeState => homeState.get('imageObject'));

const makeSelectOverlayObject = () =>
  createSelector(selectHome, homeState => homeState.get('overlayObject'));

export {
  selectHome,
  makeSelectImage,
  makeSelectCroppedImage,
  makeSelectImageObject,
  makeSelectOverlayObject,
};
