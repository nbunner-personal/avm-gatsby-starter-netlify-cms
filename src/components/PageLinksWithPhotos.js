import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const PageLinks = ({ pagelinks }) => (
  <div>
    {pagelinks.map(pagelink => (
      <article key={v4()}>
        <div>
            <h3>{pagelink.linkTitle}</h3>
            <img src={pagelink.photo} alt={pagelink.LinkTitle} />
            <p>{pagelink.linkText}</p>
            {pagelink.url}
        </div>
      </article>
    ))}
  </div>
)

PageLinks.propTypes = {
    pagelinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkTitle: PropTypes.string,
      photo: PropTypes.string,
      linkText: PropTypes.string,      
      url: PropTypes.string,      
    })
  ),
}

export default PageLinks
