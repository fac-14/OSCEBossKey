const markComplete = (id, prevState) => {
  if (!prevState.markSchemeElements[id])
    return new Error("element out of range");
  const markSchemeElements = [...prevState.markSchemeElements];
  markSchemeElements[id].completed = true;
  return {
    markSchemeElements,
    markSchemeCompleted: prevState.markSchemeCompleted + 1
  };
};

export default markComplete;
