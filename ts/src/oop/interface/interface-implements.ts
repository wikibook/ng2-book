interface Animals {    
    leg:number;
}

interface Bird extends Animals {    
    wing:number;
    getNumWing();
}

class BlueBird  implements Bird {    
    leg:number;
    wing:number;
    constructor(leg:number,wing:number) { 
        this.leg=leg;
        this.wing=wing;
    }

    getNumWing(){
        return this.wing; 
    }
}

let myBlueBird = new BlueBird(2,2);
console.log("파랑새의 날개 : "+myBlueBird.getNumWing()+"개");