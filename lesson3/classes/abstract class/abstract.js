"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
}
// let animal = new Animal(true);
class Bird extends Animal {
    constructor(isAlive, wings) {
        super(isAlive);
        this.wings = wings;
    }
    bark() {
        console.log('chik chiriki');
    }
}
