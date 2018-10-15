const functions = {
  returnEmptyPayload: (res, err, value = []) => {
    console.error(err);
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ payload: value }));
  },
  returnPopulatedArray: (res, array) => {
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ payload: array }));
  }
};

module.exports = functions;
