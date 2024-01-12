"use strict";

var _exportTest = require("./exportTest");

console.log((0, _exportTest.di)(1, 2)); /**
                                         * Dec.22
                                         * 26,27 CommonJs & ES6 export, import
                                         */

// Common Js
// let m = require("./exportTest");
// console.log(m.sum(1,2));
// console.log(m.me("Blake",18,"male"));

// // Es6

console.log((0, _exportTest.me)("Blake", 18, "male"));