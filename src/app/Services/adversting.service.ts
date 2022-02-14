import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdverstingService {
private adverss:string[]
  constructor() {
    this.adverss=[
     "Buy Tow And Get One Free ",
     "Big Sale !",
     "Become One Of First 100 Vistore"
    ]
  }
  showAdvs(time:number):Observable <string>
  {
 return new Observable <string> (Observer=>{
let countr=0;

let advTimer=setInterval(()=>{
  if(countr==this.adverss.length)
  {
    Observer.complete();
  }
  // if(this.adverss[countr]='')
  // {
  //   Observer.error("Empty Adversing")

  // }
  Observer.next(this.adverss[countr]);
  countr++;
},time*2000);

return{
  unsubscribe(){
    clearInterval(advTimer);

  }
}

   })
  }
}
