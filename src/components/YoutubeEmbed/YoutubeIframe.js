import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
export default function YoutubeIframe({ embedId, size = { width } }) {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="video-iframe"
      />
    </div>
  );
}
YoutubeIframe.propTypes = {
  embedId: PropTypes.string.isRequired,
};
