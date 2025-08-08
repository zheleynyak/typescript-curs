"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = prompt();
let y = prompt();
if (x !== null && y !== null) {
    let numbX = +x;
    let numbY = +y;
    if (numbX > numbY) {
        console.log(numbX);
    }
    else if (numbY > numbX) {
        console.log(numbY);
    }
    else if (numbX === numbY) {
        console.log('===');
    }
}
//# sourceMappingURL=main.js.map