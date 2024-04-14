"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
// Importing named exports:
var _132_3_1 = require("./132.3");
// Importing a default export:
var _132_2_1 = require("./132.2");
// This code illustrates the syntax and usage differences between default and named exports.
var A = new _132_2_1.default(4, 5).add();
var S = new _132_2_1.default(4, 5).subtract();
var M = new _132_2_1.default(4, 5).multiply();
var d = new _132_2_1.default(4, 5).divide();
console.log(A);
console.log(S);
console.log(M);
console.log(d);
(0, _132_3_1.utilOne)();
(0, _132_3_1.utilTwo)();
