import { ReflectiveInjector } from '@angular/core';
import { Dog, Pet, Config } from './dog';


export function configInjector() {
  let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([Config]);
  return injector.get(Config);
}

export function dogInjector() {
  let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([Dog, Pet, Config]);
  return injector.get(Dog);
}