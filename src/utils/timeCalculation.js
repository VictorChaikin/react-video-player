
const timeFormatting = (value) => value < 10 ? '0' + value : value; 
  
export const getTimeFormat = (timeInSeconds) => ({
  hasHours: timeInSeconds > 3600,
  hasMinutes: timeInSeconds > 60
});
  
export const getTimeFromSeconds = (time, format) => {
  let timeLabel = '';
  let hours = 0;

  if (typeof time !== 'number')
    return timeLabel;

  if (format.hasHours) {
    hours = Math.floor(time / 3600) || 0;
    timeLabel += timeFormatting(hours) + ':';
  }

  if (format.hasMinutes) {
    const minutes = (Math.floor(time / 60) - hours * 60) || 0;
    timeLabel += timeFormatting(minutes) + ':';
  }

  return timeLabel + timeFormatting(time % 60);
};