import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremelySevereComponent } from './extremely-severe.component';

describe('ExtremelySevereComponent', () => {
  let component: ExtremelySevereComponent;
  let fixture: ComponentFixture<ExtremelySevereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtremelySevereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremelySevereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
