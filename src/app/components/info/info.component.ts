import { Component, Input } from '@angular/core';
import { InfosData } from 'src/app/models/infos-data.model';
import * as educationJson from 'src/assets/education.json';
import * as experienceJson from 'src/assets/experience.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public infosEducation!: InfosData;
  public infosExperience!: InfosData;

  constructor() {
    this.infosEducation = educationJson as InfosData;
    this.infosExperience = experienceJson as InfosData;
  }
}