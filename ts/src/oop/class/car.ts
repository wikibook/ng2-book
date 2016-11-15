class MyCar {
    _numTier: number;
    _carName: string;
    
    constructor(carName: string, numTier: number){
        this._carName = carName;
        this._numTier = numTier;
    }
            
    getCarName(): string{
        return this._carName;        
    }
    get numTier(){ return this._numTier; }
}

let my:MyCar = new MyCar("Happy",4);
console.log(my.getCarName()+" 자동차의 타이어 개수 : "+my.numTier);