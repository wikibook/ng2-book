class Car{    
    constructor(public name: string, public numTier: number){}

    protected getName(){
        return this.name;
    }

    getTier(){
        return this.numTier;
    }
}

class SuperCar extends Car{
    constructor(public name: string, public numTier: number){
        super(name,numTier);
    }

    getIncreaseTier(){
        return this.getTier()+10;
    }
}

var mySuperCar = new SuperCar("MySuperCar",5);
console.log(mySuperCar.getTier());
console.log(mySuperCar.getIncreaseTier());
//console.log(mySuperCar.getName()); // 에러!

/*
주석 해제 후 테스트
*/