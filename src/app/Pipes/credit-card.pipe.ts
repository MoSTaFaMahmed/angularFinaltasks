import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value:any): any {

    let req=value.match(/.{1,4}/g);
    return (req.join('-'));

  }

}
