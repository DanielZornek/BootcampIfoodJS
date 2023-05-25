"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sayHelloUser(nameUser) {
    return nameUser;
}
let newUserMessage = sayHelloUser("Daniel Zornek");
console.log(newUserMessage);
// Funções de multi types
function callPhoneNumber(phone) {
    return phone;
    // Não precisa colocar o tipo do retorno, a própria função já entende
    // mas na hora de executar os tipos tem que bater
}
function addNumbers(a, b) {
    return a + b;
}
let soma = addNumbers(7, 5);
console.log(soma);
console.log(callPhoneNumber("4002-8922"));
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Daniel";
    });
}
console.log(getDatabase(31897491));
