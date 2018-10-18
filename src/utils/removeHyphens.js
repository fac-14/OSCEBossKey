const removeHyphens = string => (!string ? string : string.replace(/-/g, " "));

export default removeHyphens;
