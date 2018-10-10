const functions = {
  markComplete: (id, prevState) => {
    if (!prevState.markSchemeElements[id]) {
      throw new Error("element out of range");
    }
    const markSchemeElements = [...prevState.markSchemeElements];
    markSchemeElements[id].completed = !markSchemeElements[id].completed;
    return {
      markSchemeElements,
      markSchemeCompleted: prevState.markSchemeElements[id].completed
        ? prevState.markSchemeCompleted + 1
        : prevState.markSchemeCompleted - 1
    };
  },

  swipe: prevState => ({
    caseDetailsDisplayed: !prevState.caseDetailsDisplayed
  })
};

export default functions;
