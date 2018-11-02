import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link } from 'gatsby'

const PageLinks = ({ pagelinks }) => (
  <div>
    {pagelinks.map(pagelink => (
      <article key={v4()}>
        <div>
            <h3>{pagelink.linkTitle}</h3>            
            <p>{pagelink.linkText}</p>
            <Link to={pagelink.url}>
            Find out more
            </Link>
        </div>
      </article>
    ))}
  </div>
)

PageLinks.propTypes = {
    pagelinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkTitle: PropTypes.string,      
      linkText: PropTypes.string,      
      url: PropTypes.string,      
    })
  ),
}

export default PageLinks
