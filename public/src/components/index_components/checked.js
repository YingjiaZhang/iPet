function checkUserName(username) {
  return /^[a-zA-Z][a-zA-Z0-9_]{2,11}$/.test(username);
}

function isEmpty(temp) {
  return temp === '';
}

function checkPsd(password) {
  return /^[0-9a-zA-Z_]{6,12}$/.test(password);
}
module.exports = {
  checkUserName: checkUserName,
  checkUserPsd: checkPsd,
  isEmpty: isEmpty
};


