import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedProjectsSimpleTemplate } from '../../templates/featured-project-simple'

const FeaturedProjectSimplePagePreview = ({ entry, widgetFor }) => (
  <FeaturedProjectsSimpleTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FeaturedProjectSimplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FeaturedProjectSimplePagePreview
