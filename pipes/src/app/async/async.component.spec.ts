/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('Component: Async', () => {
  it('should create an instance', () => {
    let component = new AsyncComponent();
    expect(component).toBeTruthy();
  });
});
