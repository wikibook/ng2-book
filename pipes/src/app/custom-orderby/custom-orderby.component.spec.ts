/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CustomOrderbyComponent } from './custom-orderby.component';

describe('Component: CustomOrderby', () => {
  it('should create an instance', () => {
    let component = new CustomOrderbyComponent();
    expect(component).toBeTruthy();
  });
});
