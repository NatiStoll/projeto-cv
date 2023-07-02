import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import * as contactJson from 'src/assets/contact.json';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public phoneNumber!: string;
  public contact!: Contact;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog;
    this.contact = contactJson as Contact;
    this.phoneNumber = this.convertPhoneNumberToString();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '80%',
      disableClose: true,
    });
  }

  convertPhoneNumberToString(): string {
    let phoneNumber = this.contact.phoneNumber.toString();
    if (phoneNumber.length === 11) {
      const areaCode = phoneNumber.substring(0, 2);
      const digitNine = phoneNumber.substring(2, 3)
      const firstPart = phoneNumber.substring(3, 7);
      const secondPart = phoneNumber.substring(7, 11);
      const formattedNumber = `(${areaCode}) ${digitNine} ${firstPart} ${secondPart}`;
      return formattedNumber;
    }
    else {
      const areaCode = phoneNumber.substring(0, 2);
      const firstPart = phoneNumber.substring(2, 6);
      const secondPart = phoneNumber.substring(6, 10);
      const formattedNumber = `(${areaCode}) ${firstPart} ${secondPart}`;
      return formattedNumber;
    }
  }

}
