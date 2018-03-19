import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2DialogComponent } from './ng2-dialog.component';

describe('Ng2DialogComponent', () => {
  let component: Ng2DialogComponent;
  let fixture: ComponentFixture<Ng2DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
