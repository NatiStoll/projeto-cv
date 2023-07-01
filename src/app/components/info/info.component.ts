import { Component, Input } from '@angular/core';
import { InfosData } from 'src/app/models/infos-data.model';
import * as infosJson from 'src/assets/info-list.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public infosList!: InfosData[];

 ngOnInit(): void {
    this.infosList = infosJson as InfosData[];
  }
}