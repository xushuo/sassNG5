import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorMainListComponent } from './monitor-main-list.component';

describe('MonitorMainListComponent', () => {
  let component: MonitorMainListComponent;
  let fixture: ComponentFixture<MonitorMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
