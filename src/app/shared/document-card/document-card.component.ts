import { Component, Input } from '@angular/core';
import { DocumentService } from '../document.service';

export enum FileType {
  PDF = 'pdf',
  CSV = 'csv',
  WRD = 'word'
}

@Component({
  selector: 'bc-document-card',
  templateUrl: './document-card.component.html',
  styleUrls: ['./document-card.component.scss']
})
export class DocumentCardComponent {
  @Input() public title: string;
  @Input() public subtitle: string;
  @Input() public downloads: Array<{ path: string; type: FileType }>;

  constructor(private readonly documentService: DocumentService) {}

  public getSource(type: FileType): string {
    switch (type) {
      case FileType.PDF:
        return '/assets/icons/pdf-icon.png';
      case FileType.CSV:
        return '/assets/icons/csv-icon.png';
      case FileType.WRD:
        return '/assets/icons/word-icon.png';
      default:
        throw new Error('Unknown File Type');
    }
  }

  public async download(path: string) {
    const success = await this.documentService.downloadFile(path);
    console.log(
      success ? `${path} loaded successfully` : `${path} failed to load`
    );
  }
}
