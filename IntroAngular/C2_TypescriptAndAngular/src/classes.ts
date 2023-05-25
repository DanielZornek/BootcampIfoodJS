class Character{
    protected name?: string; // ? indica ser um atributo opcional
    readonly strenght: number;
    /*
        Assim como no Java e outras linguagens OO há modificadores de acesso
    */ 
    skill: number

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strenght = strength;
        this.skill = skill
    };

    attack(): void{
        console.log(`Attack with ${this.strenght} points.`)
    }

    sayNameOfCharacter(): void{
        if(this.name === undefined){
            console.log(`Hi secret person`)
        }else{
            console.log(`Hi ${this.name}`);
        }     
    }
}

// SubClasses

// Wizard: Subclass
// Character: Superclass
class Wizard extends Character{
    manaPoints: number;
    constructor(name: string, strength: number, skill: number, manaPoints: number){
        super(name, strength, skill);
        this.manaPoints = manaPoints;
    }
}

let p1 = new Character("Shorin", 45, 39);
p1.attack();
p1.sayNameOfCharacter();

let w1 = new Wizard("Alfredo", 9, 32, 98);
console.log(w1.attack());