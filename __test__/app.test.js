const request = require("supertest");
const app = require("../src/app");

test("GET /api/history returns list of station names as a JSON object", done => {
  expect.assertions(1);
  request(app)
    .get("/api/history/")
    .expect(200)
    .expect("Content-Type", /json/)
    .then(res => {
      expect(res.body.payload.length).toBeGreaterThan(0);
      done();
    });
});
test("GET /api/spacelaser returns empty payload JSON object", done => {
  expect.assertions(1);
  request(app)
    .get("/api/spacelaser/")
    .expect(200)
    .expect("Content-Type", /json/)
    .then(res => {
      expect(Array.isArray(res.body.payload)).toBeTruthy();
      done();
    });
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
  test("Invalid GET request to /api/history/chest-pain/case returns empty payload object", done => {
    expect.assertions(2);
    request(app)
      .get("/api/history/chest-pain/case/0")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(typeof res.body.payload === "object").toBeTruthy();
        expect(res.body.title).toBeFalsy();
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
  test("GET request to /api/history/chest-pain/case/2 returns correct mark scheme", done => {
    expect.assertions(1);
    request(app)
      .get("/api/history/chest-pain/case/2")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body.payload.mark_scheme.length).toBeGreaterThan(0);
        done();
      });
  });
});
