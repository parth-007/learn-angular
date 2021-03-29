import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDemoComponent } from './ref-demo.component';

describe('RefDemoComponent', () => {
  let component: RefDemoComponent;
  let fixture: ComponentFixture<RefDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
