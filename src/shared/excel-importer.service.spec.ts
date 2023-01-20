import { TestBed } from '@angular/core/testing';

import { ExcelImporterService } from './excel-importer.service';

describe('ExcelImporterService', () => {
  let service: ExcelImporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelImporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
