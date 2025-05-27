// Lógica para provably fair
module.exports = function generateHash() {
  return require('crypto').randomBytes(16).toString('hex');
};
