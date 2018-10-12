const functions = {
  returnEmptyArray: (res, err) => {
    console.error(err);
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ payload: [] }));
  },
  returnPopulatedArray: (res, array) => {
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ payload: array }));
  }
};

module.exports = functions;
