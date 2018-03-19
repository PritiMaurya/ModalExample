import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2PromptComponent } from './ng2-prompt.component';

describe('Ng2PromptComponent', () => {
  let component: Ng2PromptComponent;
  let fixture: ComponentFixture<Ng2PromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2PromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2PromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
