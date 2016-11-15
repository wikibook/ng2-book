import { MyComponent } from './my-component.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Suite - MyComponent 테스트', function () {
    let de: DebugElement;
    let comp: MyComponent;
    let fixture: ComponentFixture<MyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('spec - 컴포넌트 생성 테스트', () => expect(comp).toBeDefined());

    it('spec - 컴포넌트의 탬플릿 내용이 일치하는지를 테스트', () => {
        fixture.detectChanges();
        const h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/Hello My Component/);
    });
});