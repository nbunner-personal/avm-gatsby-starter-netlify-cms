import React from 'react'
import PropTypes from 'prop-types'
import { PageTextLinksTemplate } from '../../templates/page-text-links'

const PageTextLinksPreview = ({ entry, widgetFor }) => (
  <PageTextLinksTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}    
  />
)

PageTextLinksPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PageTextLinksPreview
