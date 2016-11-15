import {Injectable} from '@angular/core';

export class Config {
    public bark = '어흥';
    public name = '사자';
}

@Injectable()
export class Animal {
    constructor(public config: Config) {}
    getBark() {
        return this.config.bark;
    }
    getAnimalName() {
        return this.config.name;
    }
}