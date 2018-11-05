import React from 'react'
import PropTypes from 'prop-types'
import { VillagePageTemplate } from '../../templates/village-page'

const VillagePagePreview = ({ entry, widgetFor }) => (
  <VillagePageTemplate
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
