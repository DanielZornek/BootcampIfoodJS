type robot = {
	id: number | string;
	name: string;
};

interface robot2 {
	readonly id: number | string;
	// readonly não permiti fazer alterações nos valores
	name: string;
	sayHello(): string;
}

let bot001: robot = {
	id: 1,
	name: "Optimus Prime"
};

let bot002: robot2 = {
	id: "2",
	name: "Bumblebee",
	sayHello(): string{
		throw new Error("Function not implemented.");
	}
};

// Interface geralmente são usados quando usadas com classe, já type quando irá "tipar" um objt
// Porém tem bastante gente que usa interface pra tudo

console.log(`[${bot001} =  id: ${bot001.id} name: ${bot001.name}]`);

console.log(`[${bot002} =  id: ${bot002.id} name: ${bot002.name}]`);

class Pessoa implements robot2{
	id: string | number;
	name: string;

	constructor(id: string | number, name: string){
		this.id = id;
		this.name = name;
	}

	sayHello(): string{
		return `Hello ${this.name}`
	}
}

const pessoa1 = new Pessoa(4, "Silvio Santos");
console.log(pessoa1.sayHello());