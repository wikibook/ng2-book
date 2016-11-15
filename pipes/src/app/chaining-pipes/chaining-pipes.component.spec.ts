/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ChainingPipesComponent } from './chaining-pipes.component';

describe('Component: ChainingPipes', () => {
  it('should create an instance', () => {
    let component = new ChainingPipesComponent();
    expect(component).toBeTruthy();
  });
});
