import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';

export function* getImage(action) {
  try {
    const { imageObject } = yield call(actions.loadImage, {
      image: action.image,
    });
    yield put(
      actions.setImage({
        image: action.image,
        imageObject,
      }),
    );
  } catch (e) {
    // console.log({ e })
  }
}

export function* getOverlay(action) {
  try {
    const { overlayObject } = yield call(actions.loadOverlay, {
      overlay: action.overlay,
    });
    yield put(actions.setOverlay({ overlayObject }));
  } catch (e) {
    // console.log({ e })
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([
    takeLatest(constants.TYPE_GET_IMAGE, getImage),
    takeLatest(constants.TYPE_GET_OVERLAY, getOverlay),
  ]);
}
