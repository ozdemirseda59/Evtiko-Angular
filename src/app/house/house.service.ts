import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {House} from './house';
import {Observable} from 'rxjs/Observable'



@Injectable()
export class HouseService {

  constructor(private http : HttpClient) {
    
    // this.getHouse().subscribe(data=>{console.log(data)});
  }

getHouse():Observable<House[]>{
return this.http.get<House[]>('https://api.myjson.com/bins/ui3md');
}



}
