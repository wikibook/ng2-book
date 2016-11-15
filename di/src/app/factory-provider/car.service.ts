import { Injectable } from '@angular/core';

@Injectable()
export class Engine {
  public name: string;
}

@Injectable()
export class Speedmeter {
    public speed: number;
    public maxSpeed: number;        
}

@Injectable()
export class CarService {
  constructor(private speedmeter: Speedmeter,public engine:Engine) {}  
}