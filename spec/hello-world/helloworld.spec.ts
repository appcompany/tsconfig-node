import { expect } from 'chai';
import { execSync } from 'child_process';
import { readdirSync, readFileSync, rmdir, rmdirSync } from 'fs';
import { resolve } from 'path';

describe('Hello World', () => {

  const tsc = resolve(__dirname, '..', '..', 'node_modules', 'typescript', 'bin', 'tsc');
  const project = resolve(__dirname);
  const out = resolve(__dirname, 'out');

  before(() => {
    execSync(`${tsc} -p ${project}`);
  });

  after(() => {
    execSync(`rm -r ${out}`);
  });


  it('should generate hello.js', () => {
    expect(readdirSync(out)).to.contain('hello.js');
  });

  it('hello.js should contain the correct source code', () => {
    const source = readFileSync(resolve(out, 'hello.js')).toString();
    expect(source).to.equal(`"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
function hello() {
    return "Hello, World!";
}
exports.hello = hello;
//# sourceMappingURL=hello.js.map`);
  });

  it('should generate hello.js map', () => {
    expect(readdirSync(out)).to.contain('hello.js.map');
  });

  it('hello.js.map should contain correct mappings', () => {
    const source = readFileSync(resolve(out, 'hello.js.map')).toString();
    expect(source).to.equal('{"version":3,"file":"hello.js","sourceRoot":"","sources":["../hello.ts"],"names":[],"mappings":";;;AAAA,SAAgB,KAAK;IACnB,OAAO,eAAe,CAAC;AACzB,CAAC;AAFD,sBAEC"}');
  });

  it('should generate declaration file', () => {
    expect(readdirSync(out)).to.contain('hello.d.ts');
  });

  it('declaration file should have correct declarations', () => {
    const source = readFileSync(resolve(out, 'hello.d.ts')).toString();
    expect(source).to.equal('export declare function hello(): string;\n//# sourceMappingURL=hello.d.ts.map');
  });

  it('should generate declaration file map', () => {
    expect(readdirSync(out)).to.contain('hello.d.ts.map');
  });

  it('declaration map file should have correct mappings', () => {
    const source = readFileSync(resolve(out, 'hello.d.ts.map')).toString();
    expect(source).to.equal('{"version":3,"file":"hello.d.ts","sourceRoot":"","sources":["../hello.ts"],"names":[],"mappings":"AAAA,wBAAgB,KAAK,WAEpB"}');
  });


});