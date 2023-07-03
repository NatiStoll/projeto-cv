import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import addressJson from 'src/assets/data-personal.json';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit{
public address!: Address;

ngOnInit(): void {
  this.address = addressJson['data-personal'].address as Address;
}
}
