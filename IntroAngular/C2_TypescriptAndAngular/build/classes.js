"use strict";
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strenght = strength;
        this.skill = skill;
    }
    ;
    attack() {
        console.log(`Attack with ${this.strenght} points.`);
    }
    sayNameOfCharacter() {
        if (this.name === undefined) {
            console.log(`Hi secret person`);
        }
        else {
            console.log(`Hi ${this.name}`);
        }
    }
}
// SubClasses
// Wizard: Subclass
// Character: Superclass
class Wizard extends Character {
    constructor(name, strength, skill, manaPoints) {
        super(name, strength, skill);
        this.manaPoints = manaPoints;
    }
}
let p1 = new Character("Shorin", 45, 39);
p1.attack();
p1.sayNameOfCharacter();
let w1 = new Wizard("Alfredo", 9, 32, 98);
console.log(w1.attack());
