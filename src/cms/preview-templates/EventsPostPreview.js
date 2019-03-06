import React from 'react'
import PropTypes from 'prop-types'
import { EventsPostTemplate } from '../../templates/events-post'

const EventsPostPreview = ({ entry, widgetFor }) => (
  <EventsPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EventsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventsPostPreview
