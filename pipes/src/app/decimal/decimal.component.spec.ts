/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DecimalComponent } from './decimal.component';

describe('Component: Decimal', () => {
  it('should create an instance', () => {
    let component = new DecimalComponent();
    expect(component).toBeTruthy();
  });
});
