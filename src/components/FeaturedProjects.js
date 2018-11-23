import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import projectLinkStyles from './projects.module.css'

const FeaturedProjects = ({ projects }) => (
  <div>
     <ul className={projectLinkStyles.featuredProjects}>
        <li className={projectLinkStyles.active}><Link to="/projects/sams-village/">Sam's Village</Link></li>
        <li><Link to="/water/">Water</Link></li>
        <li><Link to="/health/">Health</Link></li>
        <li><Link to="/education/">Education</Link></li>
        <li><Link to="/water/">Environment</Link></li>
        <li><Link to="/water/">Celebrate &amp; Give</Link></li>
    </ul>
  </div>  
)

FeaturedProjects.propTypes = {
    currentProject: PropTypes.string,
}

export default FeaturedProjects
