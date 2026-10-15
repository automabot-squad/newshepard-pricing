// newshepard-pricing - repo publico: so SAST/SCA, nenhum secret reconhecivel.
const _ = require('lodash');
const Handlebars = require('handlebars');

function discount(rule, price) {
  // Code injection (CWE-95)
  return new Function('price', 'return ' + rule)(price);
}

function render(tpl, data) {
  return Handlebars.compile(tpl)(data);
}

function applyOverrides(base, overrides) {
  return _.defaultsDeep(base, overrides); // prototype pollution em lodash antigo
}

// ReDoS
const SKU = /^([a-z0-9]+)+-\d+$/;
function validSku(s) { return SKU.test(s); }

module.exports = { discount, render, applyOverrides, validSku };
