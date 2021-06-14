"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
describe('Hello World', () => {
    const tsc = path_1.resolve(__dirname, '..', 'node_modules', 'typescript', 'bin', 'tsc');
    const project = path_1.resolve(__dirname, '..');
    const testProject = path_1.resolve(__dirname, 'hello-world-test');
    console.log(child_process_1.execSync(`${tsc} -p ${project} spec/**/*.ts`).toString());
});
