const timerFormat = time => {
  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(Math.floor(time % 60)).padStart(2, "0");
  return mins > 0 ? `${mins}:${secs}` : `00:${secs}`;
};

export default timerFormat;
