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
  expect.assertions(1);
  request(app)
    .get("/api/history/")
    .expect(200)
    .expect("Content-Type", /json/)
    .then(res => {
      expect(Array.isArray(res.body.payload)).toBeTruthy();
      done();
    });
  // .catch(err => {
  //   console.log(err);
  //   done(err);
  // });
});

describe("GET requests to /api/history/:station return lists of cases related to :station", () => {
  test("GET /api/history/chest-pain should return list of chest pain cases as JSON object", done => {
    expect.assertions(1);
    request(app)
      .get("/api/history/chest-pain")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(Array.isArray(res.body.payload)).toBeTruthy();
        done();
      });
    // .catch(err => {
    //   console.log(err);
    //   done(err);
    // });
  });
});
