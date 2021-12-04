import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MildComponent } from './mild.component';

describe('MildComponent', () => {
  let component: MildComponent;
  let fixture: ComponentFixture<MildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
