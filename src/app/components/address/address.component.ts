import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import * as addressJson from 'src/assets/address.json';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{
public address!: Address;

ngOnInit(): void {
  this.address = addressJson as Address;
}
}
