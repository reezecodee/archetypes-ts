const utils = require('../string-utils.js');

const myName = "avicenna";
const capitalizedName = utils.capitalize(myName);
const reversedName = utils.reverseString(myName);

console.log(`Nama setelah diubah: ${capitalizedName}`);
console.log(`Nama setelah dibalik: ${reversedName}`);