import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const Videos = ({ videos }) => (
  <div className="columns is-multiline">
    {videos.map(video => (
      <div key={video.videourl} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div>
            <ReactPlayer url={video.videourl} /> 
            </div>
          </div>          
        </section>
      </div>
    ))}
  </div>
)

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({      
      videourl: PropTypes.string,
    })
  ),
}

export default Videos