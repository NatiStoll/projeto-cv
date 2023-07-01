import { Component, OnInit } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto-cv';
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '80%',
      disableClose: true,
    });

}
}
