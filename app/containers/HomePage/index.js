/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectImage,
  makeSelectCroppedImage,
  makeSelectImageObject,
  makeSelectOverlayObject,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './Page';
import * as actions from './actions';

const mapStateToProps = createStructuredSelector({
  image: makeSelectImage(),
  croppedImage: makeSelectCroppedImage(),
  imageObject: makeSelectImageObject(),
  overlayObject: makeSelectOverlayObject(),
});

const mapDispatchToProps = dispatch => ({
  // setImage: options => dispatch(actions.setImage(options)),
  getImage: options => dispatch(actions.getImage(options)),
  // setOverlay: options => dispatch(actions.setOverlay(options)),
  getOverlay: options => dispatch(actions.getOverlay(options)),
  setCropped: options => dispatch(actions.setCropped(options)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
