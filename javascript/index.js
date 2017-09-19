// Initialize test frameworks
const chai   = require('chai');
const chaiAP = require('chai-as-promised');
chai.use(chaiAP);
// We favor the BDD style.
chai.should();

describe('This is a single test suite to verify your machine is setup for programming on-site at MuleSoft', () => {
    it ('Fix this test and you are ready', () => {
        'Not ready to code!'.should.eql('I am ready to code!');
    });
});
