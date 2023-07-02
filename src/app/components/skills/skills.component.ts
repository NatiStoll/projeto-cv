import { Component, OnInit } from '@angular/core';
import { SkillsList } from 'src/app/models/skills-list.model';
import * as skillsListJson from 'src/assets/skill-list.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillsList!: SkillsList;

  ngOnInit(): void {
    this.skillsList = skillsListJson as SkillsList;
  }
}
