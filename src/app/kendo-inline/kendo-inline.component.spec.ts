import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoInlineComponent } from './kendo-inline.component';

describe('KendoInlineComponent', () => {
  let component: KendoInlineComponent;
  let fixture: ComponentFixture<KendoInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
