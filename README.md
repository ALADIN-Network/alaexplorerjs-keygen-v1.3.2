<!--[![Build Status](https://travis-ci.org/ALAIO/alakeygen1.svg?branch=master)](https://travis-ci.org/ALAIO/alakeygen1)-->
[![NPM](https://img.shields.io/npm/v/alakeygen1.svg)](https://www.npmjs.org/package/alakeygen1)

# Repository

Provides hierarchical deterministic key generation, storage, and management.

General purpose cryptography is found in [ala-ecc4](http://github.com/ALADIN-Network/ala-ecc4) library.

### Usage

```javascript
let {Keystore, Keygen} = require('alakeygen1')
Ala = require('alaexplorerjs4')

sessionConfig = {
  timeoutInMin: 30,
  uriRules: {
    'owner' : '/account_recovery',
    'active': '/(transfer|contracts)',
    'active/**': '/producers'
  }
}

keystore = Keystore('myaccount', sessionConfig)
ala = Ala.Testnet({keyProvider: keystore.keyProvider})

Keygen.generateMasterKeys().then(keys => {
  // create blockchain account called 'myaccount'
  console.log(keys)

  ala.getAccount('myaccount').then(account => {
    keystore.deriveKeys({
      parent: keys.masterPrivateKey,
      accountPermissions: account.permissions
    })
  })

})
```

See [./API](./API.md)

# Development

```javascript
let {Keystore, Keygen} = require('./src')
```

Use Node v8+ (updates `package-lock.json`)

# Browser

```bash
git clone https://github.com/ALADIN-Network/alakeygen1.git
cd alakeygen1
npm install
npm run build
# builds: ./dist/alakeygen1.js
```

```html
<script src="alakeygen1.js"></script>
<script>
//kos.Keystore
//kos.Keygen
//...
</script>
```

# Runtime Environment

Node 6+ and browser (browserify, webpack, etc)

Built with React Native in mind, create an issue if you find a bug.
