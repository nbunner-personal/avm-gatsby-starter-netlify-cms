import React from 'react'
import PropTypes from 'prop-types'
import { FeaturedProjectsTemplate } from '../../templates/featured-project'

const VillagePagePreview = ({ entry, widgetFor }) => (
  <FeaturedProjectsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

VillagePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VillagePagePreview
