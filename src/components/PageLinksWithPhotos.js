import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link } from 'gatsby'
// import Img from "gatsby-image"

const PageLinks = ({ pagelinks }) => (
  <div>
    {pagelinks.map(pagelink => (
      <div className="card" key={v4()}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={pagelink.photo} alt={pagelink.LinkTitle} alt="" />
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
