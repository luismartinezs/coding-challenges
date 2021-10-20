const addUpWithoutTens = (n) => {
  if (n <= 1) return n;
  if (n % 10 === 0) return addUpWithoutTens(n - 1);
  return n + addUpWithoutTens(n - 1);
};

module.exports = addUpWithoutTens;
