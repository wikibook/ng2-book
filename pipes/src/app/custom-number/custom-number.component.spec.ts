/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CustomNumberComponent } from './custom-number.component';

describe('Component: CustomNumber', () => {
  it('should create an instance', () => {
    let component = new CustomNumberComponent();
    expect(component).toBeTruthy();
  });
});
