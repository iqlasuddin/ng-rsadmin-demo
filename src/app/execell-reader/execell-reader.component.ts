import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelImporterService } from '../../shared/excel-importer.service';

type AOA = any[][];
@Component({
  selector: 'app-execell-reader',
  templateUrl: './execell-reader.component.html',
  styleUrls: ['./execell-reader.component.scss']
})
export class ExecellReaderComponent {

  data: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  featureFinalResult = [];
constructor(private excelImporterService: ExcelImporterService) {}
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      let title = this.data.filter(x => x[2] === undefined);
      let content = this.data.filter(x => x[2] !== undefined);
      title.forEach(fTitle => {
        content.forEach(fContent => {
          if (fTitle[0] + fTitle[1] === fContent[0] + fContent[1]) {
            for (let i = 0; i <= 3; i++) {
              if (typeof fTitle[i] === 'string' && fContent[i] !== undefined && fContent[i] !== '—'
                && fContent[i] !== 'Sold By' && fContent[i] !== 'Shipping'
                && fContent[i] !== fTitle[i]) {
                let asinScrape = fContent[4] + "";
                const asinStart = asinScrape.indexOf('@@') + 2;
                const asinCount = asinScrape.length - asinStart;
                const asin = asinScrape.substr(asinStart, asinCount);
                var tempResult = [];
                tempResult.push(fTitle[0]);
                tempResult.push(asin);
                tempResult.push(fTitle[i]);
                tempResult.push(fContent[i]);
                this.featureFinalResult.push(tempResult);
              }
            }
          }
        })
      })
      console.log(this.featureFinalResult);
    };
    reader.readAsBinaryString(target.files[0]);
  }


  export(): void {
this.excelImporterService.InsertManualTableScrapeFeature( this.featureFinalResult).subscribe();

    // /* generate worksheet */
    // const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    // /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // /* save to file */
    // XLSX.writeFile(wb, this.fileName);
  }

  readManualScrapedContent(): void {
this.excelImporterService.GetManualTableScrapeFeature().subscribe();
    
  }

}