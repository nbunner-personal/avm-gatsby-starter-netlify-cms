import React from 'react'
import PropTypes from 'prop-types'
import videoStyles from "./videos.module.css"
import ReactPlayer from 'react-player'

const Videos = ({ videos }) => (
  <div className="columns videoStyles.vid-container">
    {videos.map(video => (
      <div key={video.videourl} className="column videoStyles.vid">
        <ReactPlayer url={video.videourl} /> 
        <p>{video.videotext}</p>           
      </div>
    ))}
  </div>
)

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({      
      videourl: PropTypes.string,
      videotext: PropTypes.string,
    })
  ),
}

export default Videos