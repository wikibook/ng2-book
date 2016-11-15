import {Injectable} from '@angular/core';

export class Config {
    public walking = '쫄랑쫄랑';
    
}

interface Animal {
    getName();
}

@Injectable()
export class Dog implements Animal {
    constructor(public config: Config) { }
    walking() {
        return this.config.walking;
    }
    getName() {
        return "강아지";
    }
}

@Injectable()
export class Pet extends Dog {
    constructor(public config: Config) { super(config); }

    run() {
        return this.config.walking;
    }

    getName() {
        return "애완견";
    }
}