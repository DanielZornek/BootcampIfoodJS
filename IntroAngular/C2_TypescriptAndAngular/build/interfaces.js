"use strict";
let bot001 = {
    id: 1,
    name: "Optimus Prime"
};
let bot002 = {
    id: "2",
    name: "Bumblebee",
    sayHello() {
        throw new Error("Function not implemented.");
    }
};
// Interface geralmente são usados quando usadas com classe, já type quando irá "tipar" um objt
// Porém tem bastante gente que usa interface pra tudo
console.log(`[${bot001} =  id: ${bot001.id} name: ${bot001.name}]`);
console.log(`[${bot002} =  id: ${bot002.id} name: ${bot002.name}]`);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const pessoa1 = new Pessoa(4, "Silvio Santos");
console.log(pessoa1.sayHello());
