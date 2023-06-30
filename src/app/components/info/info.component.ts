import { Component, Input } from '@angular/core';
import { InfosDataList } from 'src/app/models/infos-data-list.model';
import * as infosJson from 'src/assets/info-list.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public infosList!: InfosDataList;

  constructor() {
    this.infosList = infosJson as InfosDataList;
  }
}