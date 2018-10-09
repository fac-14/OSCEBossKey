const request = require("supertest");
const app = require("../src/app");

describe("test root path", () => {
  test("home route responds 200 to GET request", done => {
    expect.assertions(1);
    request(app)
      .get("/")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});

describe("test /history path", () => {
  test("/history route responds 200 to GET request", done => {
    expect.assertions(1);
    request(app)
      .get("/history")
      .then(res => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
