
const request = require("supertest");
const app = require("../app");

describe("GET /", function() {
    it("it should has status code 200", function(done) {
        request(app)
            .get("/")
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });

    it("it should get hello world!", function(done) {
        request(app)
            .get("/")
            .expect('Zaki')
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });

    it("it should test has status code 200", function(done) {
        request(app)
            .get("/test")
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });

    it("it should test has hello world", function(done) {
        request(app)
            .get("/test")
            .expect('Puguh')
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });

    it("it should test has status code 200", function(done) {
        request(app)
            .get("/test2")
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });

    it("it should test has hello world", function(done) {
        request(app)
            .get("/test2")
            .expect('Bonta')
            .end(function(err, res){
                if (err) done(err);
                done();
            });
    });
});
