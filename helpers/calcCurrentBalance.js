function currentBalance(data) {
  return data.reduce((acc, cur) => acc + cur);
}

module.exports = currentBalance;
