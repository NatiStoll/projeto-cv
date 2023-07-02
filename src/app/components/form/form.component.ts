import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactForm } from 'src/app/models/contact-form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public contact?: ContactForm;
  public contactForm!: FormGroup;
  public phoneMask = '(00) 0 0000-0000';


  constructor(
    public dialogRef: MatDialogRef<FormComponent>
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getPhoneNUmberMask();
  }

  public buildForm() {
    this.contactForm = new FormGroup(
      {
        nome: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
          ]
        ),
        telefone: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(11)
          ]
        ),
        email: new FormControl(
          null,
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ]
        ),
        empresa: new FormControl(
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
          ]
        ),
        mensagem: new FormControl(
          null, Validators.maxLength(140)
        )
      }
    );
  }

  private getPhoneNUmberMask(): void {
    this.contactForm.controls['telefone'].valueChanges.subscribe((value) => {
      this.phoneMask =
        value.length === 10 ? '(00) 0000-00009' : '(00) 0 0000-0000';
    });
  }

  onInputChange(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    this.contactForm.get('telefone')?.patchValue(numericValue, { emitEvent: false });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onSubmit(): void {
    this.contact = this.contactForm.value;
    this.dialogRef.close(this.contact);
  }


}

// nome: string;
// telefone: number;
// email: string;
// empresa: string;
// mensagem: string;