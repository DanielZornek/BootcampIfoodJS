function sayHelloUser(nameUser: string) :string{
    return nameUser;
}

let newUserMessage:string = sayHelloUser("Daniel Zornek");

console.log(newUserMessage);

// Funções de multi types
function callPhoneNumber(phone: string | number){
    return phone;
    // Não precisa colocar o tipo do retorno, a própria função já entende
    // mas na hora de executar os tipos tem que bater
}  

function addNumbers(a:number, b:number):number{
    return a + b;
}

let soma: number = addNumbers(7, 5);
console.log(soma);

console.log(callPhoneNumber("4002-8922"));

async function getDatabase(id: number): Promise<string>{
   return "Daniel";
}

console.log(getDatabase(31897491));