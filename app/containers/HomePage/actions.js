import * as constants from './constants';

export const setImage = ({ image, imageObject }) => ({
  type: constants.TYPE_SET_IMAGE_SUCCESS,
  image,
  imageObject,
});

export const setOverlay = ({ overlayObject }) => ({
  type: constants.TYPE_SET_OVERLAY_SUCCESS,
  overlayObject,
});

export const setCropped = ({ croppedImage }) => ({
  type: constants.TYPE_SET_CROPPED_SUCCESS,
  croppedImage,
});

export const getOverlay = ({ overlay }) => ({
  type: constants.TYPE_GET_OVERLAY,
  overlay,
});

export const loadOverlay = ({ overlay }) =>
  new Promise((resolve, reject) => {
    if (!overlay) {
      reject(new Error('Empty overlay'));
    }
    const img = new Image();
    img.addEventListener('load', event => {
      resolve({
        overlayObject: event.target,
      });
    });
    img.src = overlay;
  });

export const getImage = ({ image }) => ({
  type: constants.TYPE_GET_IMAGE,
  image,
});

export const loadImage = ({ image }) =>
  new Promise((resolve, reject) => {
    if (!image) {
      reject(new Error('Empty image'));
    }
    const img = new Image();
    img.addEventListener('load', event => {
      resolve({
        imageObject: event.target,
      });
    });
    img.src = image;
  });
