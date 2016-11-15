class Animal {
    
    protected constructor(public name: string, public leg: number){}    
    
    getLeg(): number{ 
        return this.leg; 
    }
    protected getName(): string{
        return this.name;
    }
    
}

class Monkey extends Animal{
    constructor(name: string, leg: number) { 
        super(name, leg);
    }
    
    isClimbing(){        
        return true;
    }

    superGetName(){
        return super.getName();
    }
}

var monkey: Monkey=new Monkey("Lemur",2);
console.log("원숭이 이름 : "+monkey.name);
console.log("나무타기 가능 여부 : "+monkey.isClimbing());
console.log("다리개수 : "+monkey.getLeg());
console.log("상위 클래스의 메서드 호출 : "+monkey.superGetName());