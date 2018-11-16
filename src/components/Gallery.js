import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Gallery = ({ gallery }) => (
  <div className="columns">
    {gallery.map(gall => (
      <div className="column is-6" key={v4()}>
        <figure className="image">
          <PreviewCompatibleImage imageInfo={gall.photo} />      
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
