import { Component, Input } from '@angular/core';
import { InfosData } from 'src/app/models/infos-data-list.model';
import infosJson from 'src/assets/data-personal.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  public infosList!: InfosData[];

 ngOnInit(): void {
    this.infosList = infosJson['data-personal'].infosDataList as InfosData[];
  }
}
