"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Dec.22
 * 26,27 CommonJs & ES6 export, import
 */

// Es6 export
var sum = exports.sum = function sum(a, b) {
  return a + b;
};
var di = exports.di = function di(a, b) {
  return a / b;
};
var me = exports.me = function me(name, age, gender) {
  gender, name, age;
};

// Common JS
// module.exports = {
//     sum, di, me
// }