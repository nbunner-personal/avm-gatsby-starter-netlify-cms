import React from 'react'
import PropTypes from 'prop-types'
import { PageGalleryTemplate } from '../../templates/page-gallery'

const PageGalleryPreview = ({ entry, widgetFor }) => (
  <PageGalleryTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PageGalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PageGalleryPreview
