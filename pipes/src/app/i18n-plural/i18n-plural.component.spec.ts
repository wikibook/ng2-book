/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { I18nPluralComponent } from './i18n-plural.component';

describe('Component: I18nPlural', () => {
  it('should create an instance', () => {
    let component = new I18nPluralComponent();
    expect(component).toBeTruthy();
  });
});
