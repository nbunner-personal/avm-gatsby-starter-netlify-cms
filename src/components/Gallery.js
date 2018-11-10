import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Gallery = ({ gallery }) => (
  <div className="tile">
    {gallery.map(photo => (
      <div className="tile" key={v4()}>
       
        <img src={photo.photo} alt={photo.alt} />
       
      </div>
    ))}
  </div>
)

Gallery.propTypes = {
    gallery: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string,
      alt: PropTypes.string,      
    })
  ),
}

export default Gallery
