console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/app.js', 'utf8');

describe('', function () {
  it("Did you add a key of `resetFields` to the `methods` object with a value of the supplied function?", function () {
    let structure = function() {
      const app = new Vue({
        methods: {
          resetFields: function() {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.ticketQuantity = 1;
            this.ticketType = 'general';
            this.referrals = [];
            this.specialRequests = '';
            this.purchaseAgreementSigned = false;
          }
        }
      });
    };

    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch);
  });
});