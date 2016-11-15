import { DebugElement }   from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';
import { TestHighlightComponent } from './test-highlight.component';

describe('Suite - HighlightDirective 지시자에 대한 테스트', () => {
  
  let fixture: ComponentFixture<TestHighlightComponent>;
  let des: DebugElement[];
  let elemH3: DebugElement;

  beforeEach(() => {

    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightDirective, TestHighlightComponent ]
    })
    .createComponent(TestHighlightComponent);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    elemH3 = fixture.debugElement.query(By.css('h3:not([highlight])'));
  });

  it('spec - 하이라이트된 엘리먼트의 개수가 2개가 맞는지', () => {
    expect(des.length).toBe(2);
  });

  it('spec - 첫 번째 <h1> 엘리먼트의 배경색이 darkgray인지', () => {
    expect(des[0].styles['backgroundColor']).toBe('darkgray');
  });

  it('spec - 두 번째 <h2> 엘리먼트의 배경색이 기본 색상과 동일한지', () => {
    const dir = des[1].injector.get(HighlightDirective) as HighlightDirective;
    expect(des[1].styles['backgroundColor']).toBe(dir.defaultColor);
  });

  it('spec - 하이라이트가 존재하는 엘리먼트의 myProperty 값은 true인지', () => {
    const allTrue = des.map(de => !!de.properties['myProperty']).every(v => v === true);
    expect(allTrue).toBe(true);
  });

  it('spec - 하이라이트가 없는 엘리먼트인 h3에는 myProperty 프로퍼티가 정의되지 않았는지', () => {
    expect(elemH3.properties['myProperty']).toBeUndefined();
  });
  
  it('spec - 첫 번째 하이라이트 지시자를 주입할 수 있는지', () => {
    const dir = des[0].injector.get(HighlightDirective);
    expect(dir).toBeTruthy();
  });

  it('spec - 하이라이트 지시자가 없는 엘리먼트 elemH3가 실재 null인지', () => {
    const dir = elemH3.injector.get(HighlightDirective, null);
    expect(dir).toBe(null);
  });
  
  it('spec - 첫 번째 <h1> 엘리먼트의 제공자 토큰에 하이라이트 지시자가 포함되어 있는지', () => {
    expect(des[0].providerTokens).toContain(HighlightDirective);
  });

  it('spec - 엘리먼트 elemH3의 제공자 토큰에 하이라이트 지시자가 포함되지 않았는지', () => {
    expect(elemH3.providerTokens).not.toContain(HighlightDirective);
  });
});