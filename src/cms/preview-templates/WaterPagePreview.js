import React from 'react'
import PropTypes from 'prop-types'
import { WaterPageTemplate } from '../../templates/water-page'

const WaterPagePreview = ({ entry, widgetFor }) => (
  <WaterPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WaterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WaterPagePreview
