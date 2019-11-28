import { Component } from '@angular/core';

@Component({
  selector: 'bc-cec-documents',
  templateUrl: './cec-documents.component.html',
  styleUrls: ['./cec-documents.component.scss']
})
export class CecDocumentsComponent {
  public documents = [
    {
      title: 'Design Guidelines',
      downloads: [{ path: '/assets/docs/DesignGuidelines.pdf', type: 'pdf' }],
      description:
        'These are the requirements for your lot meet the covenants. Look here to see how high to trim up your trees, ' +
        'how long you can leave out your garbage can and much more.'
    },
    {
      title: 'Design & Improvement Request Form',
      downloads: [{ path: '/assets/docs/DesignRequestForm.pdf', type: 'pdf' }],
      description:
        'If you want to start a project on the exterior of your home, before you start, fill out this form to request ' +
        'approval to do the work. Do not start work without approval.'
    },
    {
      title: 'Covenant Enforcement Guide Book',
      downloads: [
        {
          path: '/assets/docs/BelleCreekCovenantViolationBook.pdf',
          type: 'pdf'
        }
      ],
      description:
        'This guide book answers questions like shows examples of what is acceptable an not for common problems like ' +
        'dead grass and oil stains.'
    }
  ];
}
