/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    address = address.replace(/\./g,'[.]');
    return address;
};

console.log(defangIPaddr('255.100.50.0"'))
