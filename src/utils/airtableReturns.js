const functions = {
  returnEmptyPayload: (res, err, value = []) => {
    if (err) console.error(err);
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ payload: value }));
  },
  returnPopulatedPayload: (res, data) => {
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ payload: data }));
  }
};

module.exports = functions;
