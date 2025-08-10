"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
    console.log(users[0].name);
});
async function foobar() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users').then((value) => value.json());
    return users;
}
