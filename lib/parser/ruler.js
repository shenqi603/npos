"use strict";

var transform = require('lodash.transform');

exports.normalize = normalize;
function normalize(rules) {
  var result = transform(rules, function (result, group, key) {
    result[key] = transform(group, function (result, rule, key) {
      result[key] = Array.isArray(rule) ? rule : [rule];
    });
  });
  result.__normalized = true;
  return result;
}

exports.isNormalized = isNormalized;
function isNormalized(target) {
  return target && target.__normalized;
}

exports.rules = normalize(require('./rules'));
