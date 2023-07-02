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
export class ContactComponent implements OnInit{
  public contact!: Contact;

    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
      this.openDialog;
      this.contact = contactJson as Contact;
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(FormComponent, {
        width: '80%',
        disableClose: true,
      });
    }
  
  }
