// Understanding how to organize code into modules and how to import/export them in Node.js

// cjs -> common js
// esm -> ecmascript module

// esm - import export 
// cjs - require module.exports //node.js follow in cjs more in industry

// var a = 12;

// module.exports = a;

var a = 12;
var b = 13;

// module.exports = {
//     a: a, 
//     b: b,
// };


module.exports.a = a;
module.exports.b = b;
