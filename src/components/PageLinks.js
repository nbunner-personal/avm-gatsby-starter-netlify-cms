import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link } from 'gatsby'

const PageLinks = ({ pagelinks }) => (
  <div>
    {pagelinks.map(pagelink => (
      <article key={v4()}>
        <div>
          <h3>
            <Link to={pagelink.url}>{pagelink.linkTitle}</Link>
          </h3>            
          <p>
            {pagelink.linkText}&hellip; 
            <Link to={pagelink.url}>
              Find out more
            </Link>
          </p>            
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
