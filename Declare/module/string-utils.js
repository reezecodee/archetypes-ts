module.exports = {
  capitalize: function(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  reverseString: function(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
  }
};