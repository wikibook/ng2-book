import { ReflectiveInjector } from '@angular/core';
import { Dog, Pet, Config } from './dog';

export function equalTest() {
    let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([Dog, Config]);
    let injector2: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([Dog, Config]);
    let dog1 = injector.get(Dog);
    let dog2 = injector2.get(Dog);
    return dog1 === dog2;
}

export function equalTestNew() {
    return (new Dog(new Config()) === new Dog(new Config()));
}

export function equalTestChild() {
    let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([Dog, Pet, Config]);
    let injector2: ReflectiveInjector = injector.resolveAndCreateChild([Pet]);
    let pet1 = injector.get(Pet);
    let pet2 = injector2.get(Pet);
    return pet1 === pet2;
}

export function fromResolvedProvidersTest() {
    let providers = ReflectiveInjector.resolve([Dog, Pet, Config]);
    let injector: ReflectiveInjector = ReflectiveInjector.fromResolvedProviders(providers);
    return (injector.get(Pet) instanceof Pet) && providers.length == 3;
}