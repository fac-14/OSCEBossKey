const request = require("supertest");
const app = require("../src/app");

test("GET /database-test returns list of station names", done => {
  request(app)
    .get("/database-test/")
    .expect(200)
    .then(res => {
      expect(res.statusCode).toBe(200);
      done();
    })
    .catch(err => {
      console.log(err);
      done(err);
    });
});

test("GET /api/history returns list of station names as a JSON object", done => {
  request(app)
    .get("/api/history/")
    .expect(200)
    .expect("Content-Type", /json/)
    .then(res => {
      expect(Array.isArray(res.body.payload)).toBeTruthy();
      done();
    })
    .catch(err => {
      console.log(err);
      done(err);
    });
});
