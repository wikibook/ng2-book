var obj = {
    msg: '',
    get hello() { 
        return this.msg+" world";
    },
    set hello(value) {
        this.msg = value;
    }    
};

obj.hello="hello";
console.log(obj.hello);