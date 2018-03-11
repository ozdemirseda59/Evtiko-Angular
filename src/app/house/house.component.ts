import { Component, OnInit } from '@angular/core';
import {House} from './house';
import {HouseService} from './house.service';
import { Locations } from './pipes/locations';
import { locationFills } from './pipes/location-fill';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
providers :[HouseService]
})
export class HouseComponent implements OnInit {
houses:House[];
locations:Locations[];


  constructor(private houseService:HouseService) {
   
   }

  ngOnInit() {
this.getHouse();
    }

getHouse(){
  this.houseService.getHouse().subscribe(x=>{
      this.houses = x;
      this.locations = locationFills;
      console.log(this.locations);
      console.log(this.houses);

  });
}


}
