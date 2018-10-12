const request = require("supertest");
const app = require("../src/app");

test("GET /database-test returns list of station names", done => {
  request(app)
    .get("/database-test/")
    .then(res => {
      expect(res.statusCode).toBe(200);
      done();
    })
    .catch(err => {
      console.log(err);
      done(err);
    });
});
