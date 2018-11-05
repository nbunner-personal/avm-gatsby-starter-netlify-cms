import React from 'react'
import PropTypes from 'prop-types'
import { HealthPageTemplate } from '../../templates/health-page'

const HealthPagePreview = ({ entry, widgetFor }) => (
  <HealthPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HealthPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HealthPagePreview
