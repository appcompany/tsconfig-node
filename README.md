# OneZero's `tsconfig` for Node.js

[![npm version](https://badge.fury.io/js/%40onezerocompany%2Ftsconfig-node.svg)](https://badge.fury.io/js/%40onezerocompany%2Ftsconfig-node) 
[![Testing](https://github.com/onezerocompany/tsconfig-node/actions/workflows/test.yml/badge.svg)](https://github.com/onezerocompany/tsconfig-node/actions/workflows/test.yml)
[![CodeQL](https://github.com/onezerocompany/tsconfig-node/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/onezerocompany/tsconfig-node/actions/workflows/codeql-analysis.yml)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fonezerocompany%2Ftsconfig-node.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fonezerocompany%2Ftsconfig-node?ref=badge_shield)

### TSConfig template for our Node-based projects

We have many projects based on Node.js and Typescript, which all use the same `tsconfig.json.` That's why, instead of having to maintain all these individual configs, we decided to move the configuration here. 

If you are interested in using this config file for your projects, we will explain some reasoning behind the config and what you can expect it to do in the future.

1. Follows each LTS version of Node.js
2. Uses `node` module resolution

## How to use

First, install this package inside your project:

`npm install --save-dev @onezerocompany/tsconfig-node`

Then inside your `tsconfig.json`, add the `extends` value like so:
```json
{
  "extends": "@onezerocompany/tsconfig-node/tsconfig.json"
}
```

---

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fonezerocompany%2Ftsconfig-node.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fonezerocompany%2Ftsconfig-node?ref=badge_large)

This project is licensed under the terms of the MIT license.