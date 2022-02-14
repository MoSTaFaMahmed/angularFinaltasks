import { AdverstingService } from './../../Services/adversting.service';
import { Component, OnInit } from '@angular/core';
import { Store } from './../../ViewModel/store';
import { DiscountOffers } from './../../ViewModel/discount-offers';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //Class Store//
  storeObj: Store;
   //DiscountOffers Enum
   public Discount = DiscountOffers;

   //subscribe
private subscriptionObj!:Subscription;
   flag:boolean=false;
   messeg:string=""

  constructor(private AdverServs:AdverstingService) {
    this.storeObj = new Store(
      'Mostaf Store',
      ['Ismailia', 'Suez', 'Cairo'],
      'https://picsum.photos/id/237/900/400'
    );
   }

  ngOnInit(): void {
        this.subscriptionObj=this.AdverServs.showAdvs(2).subscribe({
      next:(advshow:string)=>{
        this.messeg=advshow;
        this.flag=true;
        //alert(advshow)
        console.log(advshow);
      },
      // error:(err:string)=>{
      //   //alert(err)
      //   console.log(err);
      // },
      complete:()=>{
        this.flag=false;
       // alert('Finshed')
        console.log("f");
      }
    })
      }

      ngOnDestroy():void{
        this.subscriptionObj.unsubscribe();
      }


}
