import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about.model';
import * as aboutJson from 'src/assets/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  public about!: About;

  ngOnInit(): void {
    this.about = aboutJson as About;
  }
}
