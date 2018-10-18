const removeWhitespace = string => {
  if (string.length > 0) {
    return string.replace(/\s/g, "-");
  }
};

export default removeWhitespace;
