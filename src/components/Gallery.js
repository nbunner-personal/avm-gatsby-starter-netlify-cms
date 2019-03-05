import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
// import { Dialog } from "@reach/dialog"
import galleryStyles from "./gallery.module.css";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Gallery = ({ gallery, state, setstate }) => (
  <div className={galleryStyles.gallery}>
    {gallery.map(gall => (     
        <a href={gall.photo.childImageSharp.fluid.src} key={v4()}>
          <figure className="image">
            <PreviewCompatibleImage imageInfo={gall.photo} />
          </figure>
        </a>          
    ))}
  </div>
);

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string
    })
  )
};

export default Gallery;
