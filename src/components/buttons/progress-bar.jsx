import { useMemo, useState } from "react";
import { getTimeFormat, getTimeFromSeconds } from '../../utils/timeCalculation';

const ProgressBar = () => {
  const maxTime = 36000;
  const [ time, setTime ] = useState(0);
  const timeFormat= getTimeFormat(maxTime);
  const timeLabel = getTimeFromSeconds(time, timeFormat);
  const maxTimeLabel = useMemo(() => getTimeFromSeconds(maxTime, timeFormat), [maxTime, timeFormat]);

  const onChangeTime = (e) => {
    setTime(parseInt(e.target.value));
  };

  return (
    <div className="progress-bar">
      <input type="range" min="0" width="500px;" max={maxTime} value={time} onChange={onChangeTime} />
      <div className="time">
        {timeLabel} 
        <div className="divider">/</div>
        {maxTimeLabel}  
      </div>
    </div>
  );
}
  
export default ProgressBar;
  