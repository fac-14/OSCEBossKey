const functions = {
  markComplete: (id, prevState) => {
    if (!prevState.markSchemeElements[id]) {
      throw new Error("element out of range");
    }
    const markSchemeElements = [...prevState.markSchemeElements];
    if (!markSchemeElements[id].completed) {
      markSchemeElements[id].completed = true;
      return {
        markSchemeElements,
        markSchemeCompleted: prevState.markSchemeCompleted + 1
      };
    }
    markSchemeElements[id].completed = false;
    return {
      markSchemeElements,
      markSchemeCompleted: prevState.markSchemeCompleted - 1
    };
  },
  swipe: prevState => ({
    caseDetailsDisplayed: !prevState.caseDetailsDisplayed
  })
};

export default functions;
