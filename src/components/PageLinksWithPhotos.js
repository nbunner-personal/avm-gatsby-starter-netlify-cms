import React from 'react'
import PropTypes from 'prop-types'
// import { v4 } from 'uuid'
import { Link } from 'gatsby'
import pageLinksStyles from './pagelinks.module.css'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const PageLinks = ({ pagelinks }) => (
  <div className="columns">
    {pagelinks.map(pagelink => (
      <div className="column is-one-quarter" key={pagelink.linkTitle}>
      <div className="card">
        <div className="card-image">
          <span className={pageLinksStyles.cardImage}>
            <PreviewCompatibleImage imageInfo={pagelink.photo} />
          </span>
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
