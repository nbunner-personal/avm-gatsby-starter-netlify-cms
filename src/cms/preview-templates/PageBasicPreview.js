import React from 'react'
import PropTypes from 'prop-types'
import { PageBasicTemplate } from '../../templates/page-basic'

const PageBasicPreview = ({ entry, widgetFor }) => (
  <PageBasicTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PageBasicPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PageBasicPreview
