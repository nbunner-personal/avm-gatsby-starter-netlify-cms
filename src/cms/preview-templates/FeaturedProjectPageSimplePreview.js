import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedProjectsSimpleTemplate } from '../../templates/featured-project-simple'

const FeaturedProjectPageSimplePreview = ({ entry, widgetFor }) => (
  <FeaturedProjectsSimpleTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FeaturedProjectPageSimplePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturedProjectPageSimplePreview
