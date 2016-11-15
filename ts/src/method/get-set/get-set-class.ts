class Hello{    
    private _hello: string;
    
    get hello(): string{
        return this._hello+" world";
    }

    set hello(name: string){
        this._hello = name;
    }
}

var m = new Hello();
m.hello = "hello";
console.log(m.hello);