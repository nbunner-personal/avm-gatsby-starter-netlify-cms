import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import projectLinkStyles from './projects.module.css'

const projects = [
  {
    id: 'village',
    name: 'Sam\'s Village',
    src: '/projects/sams-village/',    
  },
  {
    id: 'water',
    name: 'Water',
    src: '/water/',
  },
  {
    id: 'health',
    name: 'Health',
    src: '/health/',
  },
  {
    id: 'education',
    name: 'Education',
    src: '/education/',
  },
  {
    id: 'environment',
    name: 'Environment',
    src: '/water/',
  },
  {
    id: 'celebrate',
    name: 'Celebrate & Give',
    src: '/water/',
  }
];

const FeaturedProjects = ({ currentProject }) => (
  <div>
     <ul className={projectLinkStyles.featuredProjects}>
        {projects.map(project => (
          
            <li className={project.id === currentProject ? projectLinkStyles.active : ``}>
              <Link to={project.src}>{project.name}</Link>
            </li>  
           
          
        ))}
        
    </ul>
  </div>  
)


FeaturedProjects.propTypes = {
    currentProject: PropTypes.string,
}

export default FeaturedProjects
