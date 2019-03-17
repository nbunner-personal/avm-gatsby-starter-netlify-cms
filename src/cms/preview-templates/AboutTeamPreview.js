import React from 'react'
import PropTypes from 'prop-types'
import { AboutTeamTemplate } from '../../templates/about-team'

const AboutTeamPreview = ({ entry, widgetFor }) => (
  <AboutTeamTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}    
  />
)

AboutTeamPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutTeamPreview
