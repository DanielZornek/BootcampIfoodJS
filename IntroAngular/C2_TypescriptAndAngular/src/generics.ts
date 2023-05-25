// generics

function concatArrays<T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArrays<number[]>([1.5, 4], [4.3]);
const stgArray = concatArrays<string[]>(["Goku", "Vegeta"], ["Granolla"]);

console.log(numArray);
console.log(stgArray);