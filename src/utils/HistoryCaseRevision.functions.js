const functions = {
  markComplete: (id, prevState) => {
    console.log("this is id", id);
    console.log(
      "this is completed before click",
      prevState.markSchemeElements[id].completed
    );
    if (!prevState.markSchemeElements[id]) {
      throw new Error("element out of range");
    }
    const markSchemeElements = [...prevState.markSchemeElements];
    markSchemeElements[id].completed = true;
    console.log(
      "this is completed after click",
      markSchemeElements[id].completed
    );
    return {
      markSchemeElements,
      markSchemeCompleted: prevState.markSchemeCompleted + 1
    };
  },
  swipe: prevState => ({
    caseDetailsDisplayed: !prevState.caseDetailsDisplayed
  })
};

export default functions;
