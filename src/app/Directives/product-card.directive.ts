import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Box]'
})
export class ProductCardDirective {
@Input('Box') BGColor:string="red";
  constructor(public elemRef:ElementRef) {

this.elemRef.nativeElement.style.boxShadow="30px 30px 25px 20px rgba(0, 0, 0, 0.15)"

   }
@HostListener('mouseover') onMouseOver(){
  this.elemRef.nativeElement.style.boxShadow=`70px 70px 70px 70px ${this.BGColor} `;

}
@HostListener('mouseout') onMouseOut(){
  this.elemRef.nativeElement.style.boxShadow="30px 30px 25px 20px rgba(0, 0, 0, 0.15)"
}
}
