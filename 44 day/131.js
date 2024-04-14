"use strict";
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.
var _131_2_1 = require("./131.2");
var Ahmed = new _131_2_1.user('Ahmed', 567891, 'PIB Colony');
Ahmed.greet();
