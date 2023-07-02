import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import * as profileJson from 'src/assets/profile.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public profile!: Profile;

  ngOnInit(): void {
    this.profile = profileJson as Profile;
  }
}
