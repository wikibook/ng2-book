/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { UpperLowerComponent } from './upper-lower.component';

describe('Component: UpperLower', () => {
  it('should create an instance', () => {
    let component = new UpperLowerComponent();
    expect(component).toBeTruthy();
  });
});
