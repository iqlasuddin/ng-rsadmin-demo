import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDraftComponent } from './table-draft.component';

describe('TableDraftComponent', () => {
  let component: TableDraftComponent;
  let fixture: ComponentFixture<TableDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
