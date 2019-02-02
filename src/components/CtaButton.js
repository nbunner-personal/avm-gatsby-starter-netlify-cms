import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import buttonStyles from './button.module.css'


const CtaButton = ({ link, text }) => (
  <span className={buttonStyles.ctaButton}>
    <Link to={link}>{text}</Link>
  </span>  
)

CtaButton.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
}

export default CtaButton
