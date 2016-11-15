function typeCheck(p: string | number): string | number {
    return p;
}

let type = typeCheck(1);
let type2 = typeCheck("1");

console.log(typeof type, type);
console.log(typeof type2, type);