import { Pipe, PipeTransform } from '@angular/core';
import  {House} from './house';

@Pipe({
  name: 'houseFilter'
})
export class HouseFilterPipe implements PipeTransform {

  transform(value: House[], filterText?: string): House[] {
    filterText = filterText?filterText.toLocaleLowerCase():null;


    console.log(filterText?value.filter((x:House)=>x.location.indexOf(filterText)!==-1) : value);
    return filterText?value.filter((x:House)=>x.location.indexOf(filterText)!==-1) : value;
  }

}
