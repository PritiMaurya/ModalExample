import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2AlertComponent } from './ng2-alert.component';

describe('Ng2AlertComponent', () => {
  let component: Ng2AlertComponent;
  let fixture: ComponentFixture<Ng2AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
