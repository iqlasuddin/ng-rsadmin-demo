import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftGeneratorComponent } from './draft-generator.component';

describe('DraftGeneratorComponent', () => {
  let component: DraftGeneratorComponent;
  let fixture: ComponentFixture<DraftGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
