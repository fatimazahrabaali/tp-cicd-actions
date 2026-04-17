// src/math.js
function add(a, b) {
return a + b;
}
function multiply(a, b) {
return a * b;
}
function factorial(n) {
if (n < 0) throw new Error('Nombre négatif');
if (n <= 1) return 1;
return n * factorial(n - 1);
}
function subtract(a, b) {
  return a - b;
}
// N'oublie pas de l'ajouter dans module.exports :
module.exports = { add, multiply, factorial, subtract };
module.exports = { add, multiply, factorial };