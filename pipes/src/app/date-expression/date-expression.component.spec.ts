/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { DateExpressionComponent } from './date-expression.component';

describe('Component: DateExpression', () => {
  it('should create an instance', () => {
    let component = new DateExpressionComponent();
    expect(component).toBeTruthy();
  });
});
