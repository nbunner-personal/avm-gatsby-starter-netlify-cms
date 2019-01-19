import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Dialog } from "@reach/dialog"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Gallery = ({ gallery, state, setstate }) => (
  <div className="columns">
    {gallery.map(gall => (
      <div className="column is-3" key={v4()}>
        <a href={gall.photo.childImageSharp.fluid.src}>
          <figure className="image">
            <PreviewCompatibleImage imageInfo={gall.photo} />      
          </figure>
        </a>
      </div>
    ))}
  </div>  
)

Gallery.propTypes = {
    gallery: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,      
    })
  ),
}

export default Gallery
