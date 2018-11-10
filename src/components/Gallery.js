import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Gallery = ({ gallery }) => (
  <div className="tile">
    {gallery.map(photo => (
      <div className="tile" key={v4()}>
        <figure className="image is-4by3">
          <PreviewCompatibleImage imageInfo={photo.photo} />      
        </figure>
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
