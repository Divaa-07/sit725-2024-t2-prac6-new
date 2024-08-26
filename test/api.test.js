// test/api.test.js
var expect  = require("chai").expect;
var request = require("request");

const { expect } = chai;

chai.use(chaiHttp);

describe('API Routes', function() {
    it('should return status 200 for GET /api/data', function(done) {
        chai.request(server)
            .get('/api/data')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});
