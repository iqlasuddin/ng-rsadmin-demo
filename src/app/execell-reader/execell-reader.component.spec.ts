import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecellReaderComponent } from './execell-reader.component';

describe('ExecellReaderComponent', () => {
  let component: ExecellReaderComponent;
  let fixture: ComponentFixture<ExecellReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecellReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecellReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
