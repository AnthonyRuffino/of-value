/* jshint node:true */ /* global define, escape, unescape */
"use strict";

const OfValue = {};

OfValue.stripUndefined = function (data) {
  Object.entries(data).filter(d => d[1] !== undefined).reduce((acc, it) => {
	  acc[it[0]] = it[1];
	  return acc;
	}, {});
};


try {
    module.exports = OfValue
}
catch(err) {
    console.log('Could ot load exports in the current context', err);
}







