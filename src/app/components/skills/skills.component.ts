import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skills-list.model';
import skillsListJson from 'src/assets/data-personal.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillsList!: Skill[];

  ngOnInit(): void {
    this.skillsList = skillsListJson['data-personal'].skillsList as Skill[];
  }
}
