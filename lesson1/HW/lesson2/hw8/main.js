"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let strDay = prompt('enter numbDay');
if (strDay !== null) {
    let numbDay = +strDay;
    if (numbDay >= 1 && numbDay <= 10) {
        console.log('1');
    }
    else if (numbDay >= 11 && numbDay <= 21) {
        console.log('2');
    }
    else if (numbDay >= 22 && numbDay <= 31) {
        console.log('3');
    }
}
//# sourceMappingURL=main.js.map