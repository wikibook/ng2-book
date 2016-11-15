/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CustomSearchComponent } from './custom-search.component';

describe('Component: CustomSearch', () => {
  it('should create an instance', () => {
    let component = new CustomSearchComponent();
    expect(component).toBeTruthy();
  });
});
