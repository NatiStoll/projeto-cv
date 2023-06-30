import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sideway-title',
  templateUrl: './sideway-title.component.html',
  styleUrls: ['./sideway-title.component.scss']
})
export class SidewayTitleComponent {
@Input() public sectionTitle!: string;
}
