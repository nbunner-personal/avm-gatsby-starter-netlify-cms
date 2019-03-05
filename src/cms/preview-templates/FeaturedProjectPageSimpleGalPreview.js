import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedProjectsSimpleGalTemplate } from '../../templates/featured-project-simple-gal'

const FeaturedProjectPageSimpleGalPreview = ({ entry, widgetFor }) => (
  <FeaturedProjectsSimpleGalTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FeaturedProjectPageSimpleGalPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturedProjectPageSimpleGalPreview
