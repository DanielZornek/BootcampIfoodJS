"use strict";
// generics
function concatArrays(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArrays([1.5, 4], [4.3]);
const stgArray = concatArrays(["Goku", "Vegeta"], ["Granolla"]);
console.log(numArray);
console.log(stgArray);
