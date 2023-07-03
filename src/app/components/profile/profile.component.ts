import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import profileJson from 'src/assets/data-personal.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  public profile!: Profile;

  ngOnInit(): void {
    this.profile = profileJson['data-personal'].profile as Profile;
  }
}
