'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let numString = num.toString();
  let res1 = 0;
  let expo = 1;

  for (let i = numString.length - 1; i >= 0; i--) {
    res1 = res1 + (numString[i] * (expo));
    expo = expo * 2;
  }
  return res1;
}
function DecimalABinario(num) {
  // tu codigo aca
  let decimal = "";

  for (let binario = num; binario != 0; binario = Math.floor(binario / 2)) {
    if (num == 0) {
      decimal = "0";
      break;
    }
    else if (binario % 2 == 0) {
      decimal += "0";
    }
    else {
      decimal += "1";
    }
  }
  return decimal.split("").reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}