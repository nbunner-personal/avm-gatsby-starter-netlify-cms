import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Dialog } from "@reach/dialog"
import '@reach/dialog/styles.css';
import galleryStyles from "./gallery.module.css";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
// import { renderComponent } from "recompose";

class Gallery extends Component {

  state = {
    showLightbox: false,
    selectedImage: null,
  }

  showLightboxHandler = (event) => {
    console.log('show lightbox');
    this.setState({
      showLightbox: true
    })
  }

  hideLightboxHandler = (event) => {
    console.log('hide lightbox');
    this.setState({
      showLightbox: false
    })
  }

  render() {
    const { gallery } = this.props
    
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
            {/* img is {this.state.selectedImage} */}
            <Img
              fluid={this.state.selectedImage}
            />
            <button type="button" onClick={this.hideLightboxHandler}>
              Close
            </button>
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
