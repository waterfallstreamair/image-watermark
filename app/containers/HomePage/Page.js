/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactCrop from 'react-image-crop';
import Column from '../../components/Column';
import Content from '../../components/Content';
import Button from '../../components/Button';
import { Wrapper, ItemWrapper, ImageArea, CropWrapper } from './Wrappers';
import Hidden from '../../components/Hidden';
import 'react-image-crop/dist/ReactCrop.css';
import { CONST_WIDTH, CONST_HEIGHT, CONST_OVERLAY_URL } from './constants';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crop: {
        x: 20,
        y: 10,
        width: 60,
        height: 30,
      },
      pixelCrop: false,
      modal: false,
    };
    this.file = null;
  }

  componentDidMount() {
    const overlay = CONST_OVERLAY_URL;
    this.props.getOverlay({ overlay });
  }

  uploadImage = () => {
    this.file.click();
  };

  getImage = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', readerEvent => {
      const content = readerEvent.target.result;
      this.props.getImage({ image: content });
      this.setState({
        modal: true,
      });
    });
    reader.readAsDataURL(file);
  };

  downloadClick = () => {
    const dataUrl = this.props.croppedImage;
    const link = document.createElement('a');
    link.download = 'image.jpeg';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  cropChange = (crop, pixelCrop) => {
    this.setState({ crop, pixelCrop });
  };

  onCropComplete = (crop, pixelCrop) => {
    this.setState({ crop, pixelCrop });
  };

  cropClick = () => {
    const { pixelCrop } = this.state;
    const { imageObject, overlayObject } = this.props;
    const croppedImage = this.getCroppedImg(
      imageObject,
      overlayObject,
      pixelCrop,
    );
    this.setState({
      modal: false,
    });
    this.props.setCropped({
      croppedImage,
    });
  };

  onImageLoaded = (image, pixelCrop) => {
    this.setState({ pixelCrop });
  };

  getCroppedImg = (image, overlay, pixelCrop) => {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    const width = CONST_WIDTH;
    const height = CONST_HEIGHT;
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );
    ctx.drawImage(
      overlay,
      0,
      0,
      width,
      height,
      pixelCrop.width - width,
      pixelCrop.height - height,
      width,
      height,
    );
    return canvas.toDataURL('image/jpeg');
  };

  render() {
    const { crop, modal } = this.state;
    const { image, croppedImage } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Image Watermark application" />
        </Helmet>
        <Content>
          {!modal && (
            <Column>
              <Button onClick={this.uploadImage}>UPLOAD IMAGE</Button>
              <Button disabled={!croppedImage} onClick={this.downloadClick}>
                DOWNLOAD
              </Button>
              <Hidden>
                <input
                  type="file"
                  ref={r => {
                    this.file = r;
                  }}
                  onChange={this.getImage}
                />
              </Hidden>
            </Column>
          )}
          {!modal && (
            <Wrapper>
              <ImageArea>
                {croppedImage && (
                  <ItemWrapper onClick={this.downloadClick}>
                    <img
                      src={croppedImage}
                      alt="cropped result with watermark"
                    />
                  </ItemWrapper>
                )}
              </ImageArea>
            </Wrapper>
          )}
          {modal && (
            <CropWrapper>
              <ReactCrop
                crop={crop}
                src={image || ''}
                onChange={this.cropChange}
                onComplete={this.onCropComplete}
                onImageLoaded={this.onImageLoaded}
              />
              <Button onClick={() => this.cropClick()}>CROP</Button>
            </CropWrapper>
          )}
        </Content>
      </article>
    );
  }
}

HomePage.propTypes = {
  image: PropTypes.string,
  croppedImage: PropTypes.string,
  imageObject: PropTypes.object,
  overlayObject: PropTypes.object,
  getImage: PropTypes.func.isRequired,
  getOverlay: PropTypes.func.isRequired,
  setCropped: PropTypes.func.isRequired,
};

export default HomePage;
