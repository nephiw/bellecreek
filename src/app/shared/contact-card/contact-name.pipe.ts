import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact-card.component';

@Pipe({
  name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {
  transform(value: Contact): any {
    if (!value || !value.firstName || !value.lastName) {
      return '';
    }

    let name: string;
    if (value.lastName) {
      name = `${value.firstName} ${value.lastName}`;
    } else {
      name = value.firstName;
    }

    return value.company ? `${name} (${value.company})` : name;
  }
}
