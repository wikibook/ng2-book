/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { I18nSelectComponent } from './i18n-select.component';

describe('Component: I18nSelect', () => {
  it('should create an instance', () => {
    let component = new I18nSelectComponent();
    expect(component).toBeTruthy();
  });
});
