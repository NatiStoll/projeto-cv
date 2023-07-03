import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about.model';
import aboutJson from 'src/assets/data-personal.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  public about!: string;

  ngOnInit(): void {
    this.about = aboutJson['data-personal'].about;
  }
}
