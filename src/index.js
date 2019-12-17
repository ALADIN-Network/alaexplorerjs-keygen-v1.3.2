const Keystore = require('./keystore')
const Keygen = require('./keygen')

const ecc = require('ala-ecc4')

module.exports = {
  Keystore,
  Keygen,
  modules: {
    ecc
  }
}