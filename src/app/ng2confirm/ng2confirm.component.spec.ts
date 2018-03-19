import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2confirmComponent } from './ng2confirm.component';

describe('Ng2confirmComponent', () => {
  let component: Ng2confirmComponent;
  let fixture: ComponentFixture<Ng2confirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2confirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2confirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
