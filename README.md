<!--[![Build Status](https://travis-ci.org/ALAIO/alaexplorerjs-keygen-v1.3.2.svg?branch=master)](https://travis-ci.org/ALAIO/alaexplorerjs-keygen-v1.3.2)-->
[![NPM](https://img.shields.io/npm/v/alaexplorerjs-keygen-v1.3.2.svg)](https://www.npmjs.org/package/alaexplorerjs-keygen-v1.3.2)

# Repository

Provides hierarchical deterministic key generation, storage, and management.

General purpose cryptography is found in [alaexplorerjs-ecc-v4.0.1](http://github.com/ALADIN-Network/alaexplorerjs-ecc-v4.0.1) library.

### Usage

```javascript
let {Keystore, Keygen} = require('alaexplorerjs-keygen-v1.3.2')
Ala = require('alaexplorerjs-v4.0.2')

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
git clone https://github.com/ALADIN-Network/alaexplorerjs-keygen-v1.3.2.git
cd alaexplorerjs-keygen-v1.3.2
npm install
npm run build
# builds: ./dist/alaexplorerjs-keygen-v1.3.2.js
```

```html
<script src="alaexplorerjs-keygen-v1.3.2.js"></script>
<script>
//kos.Keystore
//kos.Keygen
//...
</script>
```

# Runtime Environment

Node 6+ and browser (browserify, webpack, etc)

Built with React Native in mind, create an issue if you find a bug.
