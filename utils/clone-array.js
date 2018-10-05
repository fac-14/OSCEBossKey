const cloneMarkSchemeArray = array =>
  array.map(element => ({
    text: element.text,
    completed: element.completed
  }));

export default cloneMarkSchemeArray;
