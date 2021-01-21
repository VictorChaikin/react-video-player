import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const PlayPauseButton = () => {
  const [ showPlay, switchPlay ] = useState(true);

    return (
      <div className="play-pause-buttons">
        <FontAwesomeIcon icon={showPlay ? faPlay : faPause} size="2x" onClick={() => switchPlay(!showPlay)} />
      </div>
    );
  }
  
  export default PlayPauseButton;
  