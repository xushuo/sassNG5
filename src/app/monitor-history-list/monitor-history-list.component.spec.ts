import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorHistoryListComponent } from './monitor-history-list.component';

describe('MonitorHistoryListComponent', () => {
  let component: MonitorHistoryListComponent;
  let fixture: ComponentFixture<MonitorHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
