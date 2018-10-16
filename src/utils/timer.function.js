const timerFormat = time => {
  var mins = Math.floor(time / 60);
  var secs = Math.floor(time % 60);

  var display = "";

  if (mins > 0) {
    display +=
      "" + String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  } else {
    display += "00:" + String(secs).padStart(2, "0");
  }
  return display;
};

module.exports = { timerFormat };
