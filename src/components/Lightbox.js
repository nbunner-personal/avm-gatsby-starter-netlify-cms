import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import lightboxStyles from "../components/lightbox.module.css";

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;

export default class Lightbox extends Component {
  static propTypes = {
    galleryImages: PropTypes.array.isRequired // eslint-disable-line
  };

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null
    };
  }

  render() {
    const { galleryImages } = this.props;
    const { selectedImage, showLightbox } = this.state;
    return (
      <Fragment>
        <LightboxContainer>
          {galleryImages.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Img fluid={image.node.childImageSharp.fluid.src} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
          <Dialog>
            <div className={lightboxStyles.dialogInner}>
              <Img fluid={selectedImage.node.childImageSharp.fluid.src} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={() => this.setState({ showLightbox: false })}
                className={lightboxStyles.closeicon}
              >
                <path
                  fill="#58b5d7"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                />
              </svg>
            </div>
          </Dialog>
        )}
      </Fragment>
    );
  }
}
