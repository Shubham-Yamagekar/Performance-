const request = require("supertest");
const app = require("./app");

describe("Test the Performance apis", () => {
    test("It should response the POST method", done => {
        request(app)
            .post("/api/registerUser")
            .send({ fullName: "Shubham Yamagekssdaar", email: "shasdasdassss@gmail.com", password: "abcd" })
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the GET method", done => {
        request(app)
            .get("/api/downloadVideo?title=Sample")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the Post method", done => {
        request(app)
            .post("/api/loginUser")
            .send({ email: "shasdasdasss@gmail.com", password: "abcd" })
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test("It should response the GET method", done => {
        request(app)
            .post("/api/logout")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});
