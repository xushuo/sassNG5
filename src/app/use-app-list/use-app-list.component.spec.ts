import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAppListComponent } from './use-app-list.component';

describe('UseAppListComponent', () => {
  let component: UseAppListComponent;
  let fixture: ComponentFixture<UseAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
