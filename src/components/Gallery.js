import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Gallery = ({ gallery }) => (
  <div>
    {gallery.map(photo => (
      <article key={v4()}>
        <div>
            <img src={photo.photo} alt={photo.alt} />
        </div>
      </article>
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
