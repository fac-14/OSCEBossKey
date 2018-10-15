const request = require("supertest");
const app = require("../src/app");

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
      .get("/api/history/chest-pain/")
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

describe("GET requests to /api/history/:station/case/:id returns payload related to :id", () => {
  test("GET request to /api/history/:station/case/:id returns JSON object", done => {
    expect.assertions(1);
    request(app)
      .get("/api/history/chest-pain/case/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body.payload === "object").toBeTruthy();
        done();
      });
  });
  test("GET request to /api/history/chest-pain/case/1 returns correct title", done => {
    expect.assertions(1);
    request(app)
      .get("/api/history/chest-pain/case/1")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body.payload.title).toEqual(
          "57-year-old male started feeling chest pain after drinking milk"
        );
        done();
      });
  });
});
