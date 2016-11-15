import { Component } from '@angular/core';
import { dogInjector, configInjector, } from './animal-injector';
import { equalTest, equalTestNew, equalTestChild, fromResolvedProvidersTest  } from './animal-injector-test';

@Component({
  selector: 'app-reflective-injector',
  template: `
  {{dog.getName()}}는 {{dog.walking()}} <br>
  {{config.walking}},  <br>
  equalTest : {{equalTest}}<br>
  equalTestNew : {{equalTestNew}}<br>  
  equalTestChild : {{equalTestChild}}<br>
  fromResolvedProvidersTest : {{fromResolvedProvidersTest}}
  `
})
export class ReflectiveInjectorComponent {
  dog = dogInjector();
  config = configInjector();

  equalTest = equalTest();
  equalTestNew = equalTestNew();
  equalTestChild = equalTestChild();
  fromResolvedProvidersTest = fromResolvedProvidersTest();
}