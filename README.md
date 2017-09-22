# mta-tea
Tiny Encryption Algorithm (TEA) implementation compatible with the Multi Theft Auto (MTA) Lua scripting engine.

## Installation

### NPM
```
npm install mta-tea --save
```

### Usage
```js
var tea = require("mta-tea");
var key = "secret key";

var encoded = tea.encode("input text", key);
console.log("Encoded:", encoded);

var decoded = tea.decode(encoded, key);
console.log("Decoded:", decoded);
```
