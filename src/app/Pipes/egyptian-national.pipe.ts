import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianNational'
})
export class EgyptianNationalPipe implements PipeTransform {

  transform(idNum:any): any{
    var Year = idNum.substring(1, 3);
    var Month = idNum.substring(3, 5)
    var Day = idNum.substring(5,7)
    var cutoff = (new Date()).getFullYear() - 2000
    var dob =  (Year > cutoff ? '19' : '20')  + Year + '/' + Month + '/' + Day;
         return dob;
    // return currentDate-parseInt(idNum.toString().slice(1,6))
  }
 


}
