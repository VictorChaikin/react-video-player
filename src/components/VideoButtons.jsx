import ProgressBar from "./buttons/progress-bar";
import PlayPauseButton from "./buttons/play-pause-button";

const VideoButtons = () => {
    return (
      <div className="video-buttons">
        <PlayPauseButton />
        <ProgressBar />
      </div>
    );
  }
  
  export default VideoButtons;
  