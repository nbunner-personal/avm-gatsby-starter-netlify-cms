import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PageLinks = ({ pagelinks }) => (
  <div className="columns">
    {pagelinks.map(pagelink => (
      <div className="column is-one-third">
      <div className="card" key={v4()}>
        <div className="card-image">
          <figure className="image">
            <PreviewCompatibleImage imageInfo={pagelink.photo} />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h3>{pagelink.linkTitle}</h3>
            
            <p>{pagelink.linkText}</p>
            <Link to={pagelink.url}>
            Find out more
            </Link>
          </div>  
        </div>
      </div>
      </div>
    ))}
  </div>
)

PageLinks.propTypes = {
    pagelinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkTitle: PropTypes.string,
      photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      linkText: PropTypes.string,      
      url: PropTypes.string,      
    })
  ),
}

export default PageLinks
