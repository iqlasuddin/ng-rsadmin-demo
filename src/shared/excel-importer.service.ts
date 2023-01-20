import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcelImporterService {
  baseUri: string = 'http://localhost:52952/api/';
  constructor(private httpClient: HttpClient) { }

  InsertManualTableScrapeFeature(body: any) {
    return this.httpClient.post<any>(this.baseUri + 'ExcelImporter/InsertManualTableScrapeFeature', body);
  }

  GetManualTableScrapeFeature() {
    return this.httpClient.get<any>(this.baseUri + 'ExcelImporter/GetManualTableScrapeFeature');
  }
}
