# Base TSConfig
### TSConfig template for our Node based projects

Since we have a lot of projects based on Node.js and Typescript, which all use basically the same `tsconfig.json`. Instead of having to maintain all these individual configs we decided to move the configuration here. 

In case you are interested in using this config file for your own projects we will explain some reasoning behind the config and what you can expect it to do in the future.

1. It will be updated to each LTS version of Node.js
2. It uses `node` module resolution
