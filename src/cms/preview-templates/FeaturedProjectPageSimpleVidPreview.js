import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedProjectsSimpleVidTemplate } from '../../templates/featured-project-simple-vid'

const FeaturedProjectPageSimpleVidPreview = ({ entry, widgetFor }) => (
  <FeaturedProjectsSimpleVidTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FeaturedProjectPageSimpleVidPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturedProjectPageSimpleVidPreview
