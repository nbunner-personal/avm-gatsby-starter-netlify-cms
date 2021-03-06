import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import galleryStyles from "./gallery.module.css";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
// import { renderComponent } from "recompose";

class Gallery extends Component {
  state = {
    showLightbox: false,
    selectedImage: null
  };

  showLightboxHandler = event => {
    console.log("show lightbox");
    this.setState({
      showLightbox: true
    });
  };

  hideLightboxHandler = event => {
    console.log("hide lightbox");
    this.setState({
      showLightbox: false
    });
  };

  render() {
    const { gallery } = this.props;

    return (
      <div className={galleryStyles.gallery}>
        {gallery.map(gall => (
          <span
            className={galleryStyles.gridCell}
            onClick={() =>
              this.setState({
                showLightbox: true,
                selectedImage: gall.photo.childImageSharp.fluid
              })
            }
            key={v4()}
          >
            <figure className="image">
              <PreviewCompatibleImage imageInfo={gall.photo} />
            </figure>
          </span>
        ))}
        {this.state.showLightbox && (
          <Dialog>
            <div className={galleryStyles.dialogInner}>
              {/* img is {this.state.selectedImage} */}
              <Img fluid={this.state.selectedImage} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                onClick={this.hideLightboxHandler}
                className={galleryStyles.closeicon}
              >
                <path
                  fill="#1a222d"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                />
              </svg>
            </div>
          </Dialog>
        )}
      </div>
    );
  }
}

// export default Gallery;

// const Gallery = ({ gallery, state, setstate }) => (
//   <div className={galleryStyles.gallery}>
//     {gallery.map(gall => (
//         <a
//         onClick={this.showLightboxHandler}
//         href={gall.photo.childImageSharp.fluid.src} key={v4()}>
//           <figure className="image">
//             <PreviewCompatibleImage imageInfo={gall.photo} />
//           </figure>
//         </a>
//     ))}
//   </div>
// );

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string
    })
  )
};

export default Gallery;
