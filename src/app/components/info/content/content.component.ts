import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
@Input() public title!: string;
@Input() public subTitle!: string;
@Input() public text!: string;


}
