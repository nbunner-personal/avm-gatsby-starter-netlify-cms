import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import heroStyles from './heroImage.module.css'


const hero = ({ heroImage, heroMsg }) => (
    <div
        className={`full-width-image-container margin-top-0 margin-bottom-0 ${heroStyles.heroCont}`}
        style={{
            backgroundImage: `url(${
                !!heroImage.childImageSharp
                    ? heroImage.childImageSharp.fluid.src
                    : heroImage
                })`,
        }}
    >
        <div className={heroStyles.heroText}>{heroMsg}</div>
    </div>
)

hero.propTypes = {
    heroImage: PropTypes.object, 
    heroMsg: PropTypes.string,
}

export default hero
