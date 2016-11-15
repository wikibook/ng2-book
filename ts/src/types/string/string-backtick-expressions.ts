let w: string ="world";
let one: number = 1;
function hi(){
    return "hi";
}

let hello_message: string =`
hello ${w}
1 + ${one} = ${1+1}
${hi()}
`
console.log(hello_message);