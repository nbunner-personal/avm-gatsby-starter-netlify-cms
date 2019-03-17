import React from 'react'
import PropTypes from 'prop-types'
import { TeamTemplate } from '../../templates/about-team'

const AboutTeamPreview = ({ entry, widgetFor }) => (
  <TeamTemplate
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
